// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const articlesPath = path.join(process.cwd(), 'pages/blog');

export async function getSlug() {
  const paths = fs.readdirSync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
}

export default (req: NextApiRequest, res: NextApiResponse): void => {
  console.log(getSlug());
  req.method === 'GET' && res.status(200).json({ name: 'John Doe' });
};
