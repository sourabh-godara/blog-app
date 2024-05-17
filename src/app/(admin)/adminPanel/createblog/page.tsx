import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { title } from 'process'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editor',
  description: 'Blog Editor'
}

const EditorComp = dynamic(() => import('./EditorComp'), { ssr: false })

const markdown = `
# Heading
Hello **world**!
`

export default function Home() {
  return (
    <>
      <div>
        <Suspense fallback={null}>
          <EditorComp markdown={markdown} />
        </Suspense>
      </div>
    </>
  )
}
