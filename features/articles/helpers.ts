import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { z } from 'zod';

/** I'm forgetful. I'd rather zod remind me I'm missing a property
 * than have to remember to check for it later. */
export const articleMetaDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  createdAt: z.date().transform((d) => d.toISOString()),
  updatedAt: z.date().transform((d) => d.toISOString()),
  thumbnail: z.string(),
});

export type ArticleMetaData = z.infer<typeof articleMetaDataSchema>;

export async function getArticlesData() {
  const articlesPath = path.join(process.cwd(), 'pages/blog');
  const paths = fs.readdirSync(articlesPath);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/');
    const greyMatter = matter(fs.readFileSync(articlesPath + '/' + path));
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return articleMetaDataSchema.parse({ slug, ...greyMatter.data });
  });
}
