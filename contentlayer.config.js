import { makeSource, defineDocumentType } from '@contentlayer/source-files'

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    image: { type: 'image' },
    publishedAt: {
      type: 'date',
      required: true
    },
    updatedAt: {
      type: 'date',
      required: true
    },
    isPublished: {
      type: 'boolean',
      default: false
    },
    author: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' }
    }
  },
  computedFields: {
    url_path: {
      type: 'string',
      resolve: doc => `/blogs/${doc._raw.flattenedPath}`
    }
  }
}))
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog]
})
