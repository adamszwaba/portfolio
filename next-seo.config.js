const url = 'https://adamszwaba.com';
const title = 'Adam Szwaba - developer, kind of a person';
const description = 'Front-end developer, Next enthusiast and well, him.';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    // images: [
    //   {
    //     url: `${url}/static/images/og.jpg`,
    //     alt: title,
    //     width: 1280,
    //     height: 720,
    //   },
    // ],
  },
  twitter: {
    handle: '@AdamSzwaba',
    site: '@AdamSzwaba',
    cardType: 'summary_large_image',
  },
};

export default SEO;
