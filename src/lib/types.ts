export type blog = {
  publishedAt: String
  slug: String
  mainImage: any
  title: String
  description: String
  author: {
    slug: String
    name: String
  }
}

export type blogDetails = {
  publishedAt: String
  mainImage: any
  title: String
  author: {
    slug: String
    name: String
  }
  body: any
}
