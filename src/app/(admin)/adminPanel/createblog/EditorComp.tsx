'use client'

import {
  BoldItalicUnderlineToggles,
  InsertTable,
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  headingsPlugin,
  quotePlugin,
  toolbarPlugin
} from '@mdxeditor/editor'
import { FC } from 'react'

interface EditorProps {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <MDXEditor
      //onChange={e => console.log(e)}
      // ref={editorRef}
      markdown={markdown}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <div className='flex gap-4'>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <InsertTable />
              </div>
            </>
          )
        })
      ]}
    />
  )
}

export default Editor
