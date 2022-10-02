
const title = "Change Me!"
const genericDescription = "A description of my site";
const url = "https://www.example.com"


const SEO = {
  title: title,
  description: genericDescription,
  canonical: url,
  openGraph: {
    url: url,
    title: title,
    description: genericDescription,
    images: [
      {
        url: '/images/john-og.jpg',
        width: 1200,
        height: 630,
        alt: 'An image',
        type: 'image/jpeg',
      },
    ],
    site_name: 'My site',
  },
  twitter: {
    title: title,
    image: '/images/john-og.jpg',
    description: genericDescription,
    image: '/images/john-og.jpg',
  }
};

export default SEO;
