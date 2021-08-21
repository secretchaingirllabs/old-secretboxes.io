import { SecondaryButton } from '@/components/common/SecondaryButton'
import { MainLayout } from '@/components/Layouts/MainLayout'
import MDXComponents from '@/components/MDXComponents'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'

const Tutorials = ({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MainLayout title={frontMatter.title}>
    <div className="pt-6 mx-auto bg-dark-body">
      <div className="h-[197px] w-[100vw] mb-36 max-w-[720px] mx-auto">
        <h1 className="text-5xl tracking-wider text-[#14142B] font-display mb-5">
          {frontMatter.title}
        </h1>
        <div className="flex items-center mb-6 space-x-9">
          <div className="flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8.5" r="7.5" stroke="#4E4B66" />
              <path
                d="M9.85286 5.67716C9.85286 6.70051 9.02327 7.5301 7.99991 7.5301C6.97656 7.5301 6.14697 6.70051 6.14697 5.67716C6.14697 4.65381 6.97656 3.82422 7.99991 3.82422C9.02327 3.82422 9.85286 4.65381 9.85286 5.67716Z"
                stroke="#4E4B66"
              />
              <path
                d="M12.2352 13.6785C12.2352 12.4305 11.789 11.2335 10.9947 10.351C10.2005 9.46845 9.12321 8.97266 7.99994 8.97266C6.87667 8.97266 5.79941 9.46845 5.00514 10.351C4.21087 11.2335 3.76465 12.4305 3.76465 13.6785"
                stroke="#4E4B66"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm font-semibold text-gray-body">Secret Agent</p>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <svg width="20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.093 8.404h17.824M14.442 12.31h.01M10.005 12.31h.009M5.558 12.31h.009M14.442 16.196h.01M10.005 16.196h.009M5.558 16.196h.009M14.044 1v3.29M5.966 1v3.29"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M14.238 2.58H5.771C2.834 2.58 1 4.214 1 7.221v9.05C1 19.326 2.834 21 5.771 21h8.458C17.175 21 19 19.355 19 16.347V7.222c.01-3.007-1.816-4.643-4.762-4.643z"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm font-semibold text-gray-body">Mar 3, 2021</p>
          </div>
        </div>
        <Image src="/images/tutorials_alien_man.png" width="720px" height="200px" />
      </div>
      <div className="max-w-[740px] mx-auto">
        <div className="mb-16 prose bg-[#F9F9F9] px-4 max-w-[740px] pb-10">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
        <SecondaryButton className="px-10 py-4 mx-auto space-x-2">
          <span>Back to Tutorials Page</span>
          <svg width="18" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.141.59a.715.715 0 0 0-.38.627v4.066H.735A.726.726 0 0 0 0 6c0 .396.329.717.734.717h8.028v4.066c0 .262.145.502.38.627.233.127.52.119.746-.02l7.77-4.783A.714.714 0 0 0 18 6a.714.714 0 0 0-.343-.607L9.887.61a.755.755 0 0 0-.746-.02z"
              fill="#200E32"
            />
          </svg>
        </SecondaryButton>
        <div className="pb-28" />
      </div>
    </div>
  </MainLayout>
)

export async function getStaticPaths() {
  const posts = await getFiles('Tutorials')

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
  const post = await getFileBySlug('Tutorials', params!.slug)

  return { props: { ...post } }
}

export default Tutorials
