from github import Github
from github.GithubException import GithubException
import os
import logging

logger = logging.getLogger(__name__)


GITHUB_USERNAME = os.environ['GITHUB_USERNAME']
GITHUB_REPO = os.environ['GITHUB_REPO']
GITHUB_TOKEN = os.environ['GITHUB_TOKEN']

class GithubClient:

    def __init__(self) -> None:
        self.client = Github(GITHUB_TOKEN)
        self.repo = self.client.get_repo(f"{GITHUB_USERNAME}/{GITHUB_REPO}")
        self.trunk = self.repo.default_branch
        self.toucan_branch = 'toucan-updates'

    def create_new_branch(self) -> None:
        """Create a new branch from the trunk"""
        sb = self.repo.get_branch(self.trunk)
        self.repo.create_git_ref(ref='refs/heads/' + self.toucan_branch, sha=sb.commit.sha)

    def upsert_file(self, file_path: str, file_content: str) -> None:
        """Upsert a file to the toucan branch"""
        try:
            self.repo.get_branch(branch=self.toucan_branch)
        except GithubException:
            self.create_new_branch()

        try:
            previous_sha = self.repo.get_contents(file_path, ref=self.toucan_branch).sha
            updated = self.repo.update_file(
                path=file_path,
                message='Automated commit from ToucanCMS',
                content=file_content,
                branch=self.toucan_branch,
                sha=previous_sha
            )
        except GithubException:
            logger.info(f'Could not update {file_path}, attempting create..')
            created = self.repo.create_file(file_path, 'Automated create from ToucanCMS', file_content, branch=self.toucan_branch)

    def create_pr(self):
        """Create a PR from the toucan branch to the main branch"""
        try:
            pr = self.repo.create_pull(
                title="Automated PR from ToucanCMS",
                body="Automated PR from ToucanCMS",
                head=self.toucan_branch,
                base=self.trunk
            )
            logger.info(f"Sucessfull created PR: {pr.title}")
        except GithubException:
            logger.info(f'A PR already exists for the {self.toucan_branch} branch, updating it..')

    def merge_to_main(self):
        """Merge the toucan branch to the main branch"""
        try:
            self.repo.merge(
                self.trunk,
                self.repo.get_branch(self.toucan_branch).commit.sha,
                "Merge of the ToucanCMS Branch"
            )
        except Exception as exp:
            logger.exception(f'Failed to merge Toucan PR {exp}')



if __name__ == '__main__':
    github_client = GithubClient()

    with open('cms/john.jpg', 'rb') as file:
        content = file.read()


    github_client.upsert_file(
        file_path="john.jpg",
        file_content=content
    )

    github_client.create_pr()
    # github_client.merge_to_main()
