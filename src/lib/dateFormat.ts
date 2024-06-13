export const formatDate = publishedAt => {
  const date = new Date(publishedAt)
  const longFormDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  return longFormDate
}
