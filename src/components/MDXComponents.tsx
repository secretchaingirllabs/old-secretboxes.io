import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React, { AnchorHTMLAttributes, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { SecondaryButton } from './common/SecondaryButton'

const CustomLink = ({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isHeaderLink = href && href.startsWith('#')

  if (isHeaderLink) {
    return <a href={href} {...rest} />
  }
  if (isInternalLink) {
    return (
      <Link href={href!}>
        <a {...rest} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...rest} />
}

const Pre = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>
) => {
  const copyToClipboard = useCopyToClipboard()[1]

  return (
    <div className="relative">
      <SecondaryButton
        size="sm"
        className="absolute py-0.5 text-sm top-3 right-3"
        // @ts-ignore
        onClick={() => copyToClipboard(props.children?.props?.children ?? '')}
      >
        Copy
      </SecondaryButton>
      <pre {...props} />
    </div>
  )
}

const ImageWithPreview = (props: ImageProps) => {
  const [hovered, setHovered] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <>
      {show && (
        <button
          type="button"
          onClick={() => setShow(false)}
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/30"
        >
          <div className="relative">
            {/* @ts-ignore */}
            <Image
              {...props}
              quality={100}
              // @ts-ignore
              width={`${1.5 * props.width.split('px')[0]}px`}
              // @ts-ignore
              height={`${1.5 * props.height.split('px')[0]}px`}
            />
            <a className="no-underline" href={props.src} download>
              <SecondaryButton className="absolute left-0 px-8 space-x-2 -bottom-14">
                <span>Download</span>
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.082 9.29V1.264"
                    stroke="#4E4B66"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.025 7.339L7.081 9.29 5.137 7.339"
                    stroke="#4E4B66"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.17 4.418h.622c1.357 0 2.456 1.1 2.456 2.457v3.256a2.45 2.45 0 0 1-2.45 2.45H3.371a2.457 2.457 0 0 1-2.456-2.457V6.868a2.45 2.45 0 0 1 2.45-2.45h.628"
                    stroke="#4E4B66"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SecondaryButton>
            </a>
          </div>
        </button>
      )}
      <div
        className="relative"
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        style={{ width: props.width, height: props.height }}
      >
        <button
          type="button"
          onClick={() => setShow(true)}
          className={clsx(
            hovered
              ? 'bg-black/30 absolute flex items-center justify-center inset-0 h-full w-full z-10'
              : 'hidden'
          )}
        >
          <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.554 16.482l-5.19 5.19V18.82H8V24h5.18v-1.363h-2.852l5.19-5.19-.964-.964zM18.82 8v1.363h2.852l-5.19 5.19.964.965 5.19-5.19v2.853H24V8h-5.18z"
              fill="#FCFCFC"
            />
            <rect x=".5" y=".5" width="31" height="31" rx="7.5" stroke="#FCFCFC" />
          </svg>
        </button>
        <Image {...props} />
      </div>
    </>
  )
}

const MDXComponents = {
  a: CustomLink,
  Image,
  ImageWithPreview,
  pre: Pre,
  hr: (props: any) => <hr {...props} style={{ marginBottom: '25px' }} />,
}

export default MDXComponents
