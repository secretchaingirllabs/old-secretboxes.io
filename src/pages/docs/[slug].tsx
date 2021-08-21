import Layout from '@/components/Layouts/DocsLayout/DocsLayout'
import MDXComponents from '@/components/MDXComponents'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'

const Docs = ({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <div className="max-w-[710px] mx-auto">
      <h1 className="mb-10 text-4xl">{frontMatter.title}</h1>
      <div className="prose-dark max-w-[710px]">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>
    </div>
  </div>
)

export async function getStaticPaths() {
  const posts = await getFiles('Docs')

  return {
    paths: posts.map((p) => ({
      params: { slug: p.replace(/\.mdx/, '') },
    })),
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string
}>) {
  const post = await getFileBySlug('Docs', params!.slug)

  return { props: { ...post } }
}

Docs.Layout = Layout

export default Docs
