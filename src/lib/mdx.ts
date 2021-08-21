/* eslint-disable global-require */
import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import readingTime from 'reading-time'
import { MDXFrontMatter, MDXMetaData } from '../types'

const root = path.join(process.cwd(), 'src')

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const { title, publishedAt, summary, image, tags } = data as MDXMetaData
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor'],
            },
          },
        ],
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      wordCount: content.split(/\s+/gu).length,
      slug,
      title,
      publishedAt,
      summary,
      image,
      tags,
    } as MDXFrontMatter,
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.reduce((allPosts: MDXFrontMatter[], postSlug: string) => {
    const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8')
    const { data, content } = matter(source)
    const { title, publishedAt, summary, image, tags } = data as MDXMetaData

    return [
      {
        title,
        publishedAt,
        summary,
        image,
        slug: postSlug.replace('.mdx', ''),
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        tags,
      },
      ...allPosts,
    ]
  }, [])
}
