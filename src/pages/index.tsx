import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useRef } from 'react'

export default function HomePage() {
  const ck = useRef<any>()

  return (
    <div>
      <button
        onClick={() => {
          console.log(ck.current.getData())
        }}
      >
        getData
      </button>

      <CKEditor
        config={{ language: 'zh-cn' }}
        data="<p>Hello from CKEditor 5!</p>"
        editor={ClassicEditor}
        onReady={(editor) => {
          ck.current = editor
        }}
      />
    </div>
  )
}
