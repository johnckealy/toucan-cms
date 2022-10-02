FROM python:3.10-buster

RUN mkdir /ubuntu
WORKDIR /ubuntu

RUN apt-get update && apt-get -y install \
    netcat-openbsd apt-utils

RUN pip install --upgrade pip

RUN useradd -ms /bin/bash ubuntu
USER ubuntu
ENV PATH="/home/ubuntu/.local/bin:${PATH}"

COPY --chown=ubuntu:ubuntu requirements.txt /ubuntu/

RUN pip install -r requirements.txt

COPY --chown=ubuntu:ubuntu . /ubuntu
