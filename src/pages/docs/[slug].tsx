import { NoFeedbackModal } from '@/components/common/modals/NoFeedbackModal'
import { YesFeedbackModal } from '@/components/common/modals/YesFeedbackModal'
import { PrimaryButton } from '@/components/common/PrimaryButton'
import { SecondaryButton } from '@/components/common/SecondaryButton'
import DocsLayout from '@/components/Layouts/DocsLayout/DocsLayout'
import MDXComponents from '@/components/MDXComponents'
import { githublink } from '@/config/seo'
import { useUI } from '@/hooks/useUI'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'

const Docs = ({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { openModal } = useUI()

  return (
    <>
      <YesFeedbackModal />
      <NoFeedbackModal />
      <DocsLayout title={frontMatter.title}>
        <div className="max-w-[710px] mx-auto pb-16">
          <h1 className="mb-10 text-4xl">{frontMatter.title}</h1>
          <div className="prose-dark max-w-[710px]">
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </div>
          <div className="flex items-center justify-between p-8 rounded-lg bg-primary">
            <h4 className="text-xl text-black">Was this article useful?</h4>
            <div className="flex space-x-4">
              <PrimaryButton onClick={() => openModal('YesFeedback')} className="px-6">
                Yes
              </PrimaryButton>
              <SecondaryButton onClick={() => openModal('NoFeedback')} className="px-6">
                No
              </SecondaryButton>
            </div>
          </div>
          <p className="mt-4 text-sm text-right">
            Have a suggestion?{' '}
            <a
              className="text-primary"
              href={`${githublink}/src/data/Docs/errors-and-how-to-resolve-them.mdx`}
            >
              Edit this doc on GitHub
            </a>
          </p>
        </div>
      </DocsLayout>
    </>
  )
}

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

export default Docs
