import { RichTextBlock } from 'prismic-reactjs'

export type PostsProps = {
  posts: {
    uid: string | undefined
    banner_url: string
    banner_alt: string
    title: string
    subtitle: string
  }[]
}

export type PrismicPostsProps = {
  response: {
    uid: string
    first_publication_date: string
    data: {
      banner: {
        url: string
        alt: string
      }
      title: { text: string }[]
      subtitle: { text: string }[]
      content: RichTextBlock[]
    }
  }
}

export type PostProps = {
  uid?: string | undefined
  banner_url: string | undefined
  banner_alt: string | undefined
  title: string | undefined
  subtitle: string | undefined
}
