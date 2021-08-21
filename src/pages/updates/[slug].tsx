import { Avatar } from '@/components/common/Avatar'
import { MailingListSignupBanner2 } from '@/components/forms/MailingListSignupBanner2'
import { MainLayout } from '@/components/Layouts/MainLayout'
import MDXComponents from '@/components/MDXComponents'
import { UploadDataAndReadTime } from '@/components/Pages/Updates/UploadDataAndReadTime'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'

export default function Update({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout title={frontMatter.title}>
      <div className="mx-auto mt-6">
        <div className="max-w-[710px] mx-auto">
          <h1 className="text-5xl font-display mb-7">“GripTape” Secret Box Launching</h1>
          <p className="font-semibold text-gray-primary mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque
            tincidunt scelerisque amet velit facilisis accumsan neque.
          </p>
          <Image
            alt="empty rectangle"
            width="704px"
            height="296px"
            src="/images/cover.webp"
          />
          <div className="mb-20" />
          <div className="prose max-w-[710px]">
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </div>
          <h3 className="my-16 text-xl font-semibold">Thank you for reading!</h3>
          <ul className="flex space-x-4">
            {frontMatter.tags.map((t) => (
              <li
                className="bg-[#EFF0F6] p-[0.6rem] text-xs rounded-lg capitalize"
                key={t}
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mb-20" />
          <h4 className="text-3xl tracking-wider font-display">More From Secret Box</h4>
          <div className="mb-7" />
          <hr />
          <div className="mb-4" />
          <ul className="flex space-x-4 mb-36">
            <li className="p-4 transition hover:shadow-lg">
              <div className="mb-4 w-[192px] h-[177px] bg-gray-primary" />
              <div className="mb-1">
                <Avatar authorName="Secret Agent" />
              </div>
              <div className="text-lg font-semibold">Sienna Network</div>
              <UploadDataAndReadTime uploadDate="Mar 3" readTime="2 min read" />
            </li>
            <li className="p-4 transition hover:shadow-lg">
              <div className="mb-4 w-[192px] h-[177px] bg-gray-primary" />
              <div className="mb-1">
                <Avatar authorName="Secret Agent" />
              </div>
              <div className="text-lg font-semibold">Sienna Network</div>
              <UploadDataAndReadTime uploadDate="Mar 3" readTime="2 min read" />
            </li>
            <li className="p-4 transition hover:shadow-lg">
              <div className="mb-4 w-[192px] h-[177px] bg-gray-primary" />
              <div className="mb-1">
                <Avatar authorName="Secret Agent" />
              </div>
              <div className="text-lg font-semibold">Sienna Network</div>
              <UploadDataAndReadTime uploadDate="Mar 3" readTime="2 min read" />
            </li>
          </ul>
        </div>
        <MailingListSignupBanner2 onSubmit={() => {}} />
      </div>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('Updates')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string
}>) {
  const post = await getFileBySlug('Updates', params!.slug)

  return { props: { ...post } }
}
