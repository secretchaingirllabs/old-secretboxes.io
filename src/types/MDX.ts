interface IReadTimeResults {
  text: string
  time?: number
  words?: number
  minutes?: number
}

export interface MDXFrontMatter extends MDXMetaData {
  wordCount: number
  readingTime: IReadTimeResults
  slug: string
}

export interface MDXMetaData {
  title: string
  publishedAt: string
  summary: string
  image: string
  tags: string[]
}
