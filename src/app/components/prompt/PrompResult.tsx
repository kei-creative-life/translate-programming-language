import { useState } from 'react'
import sanitize from 'sanitize-html'

export default function PromptResult({ promptResponse }: any) {
  const [isClick, setIsClick] = useState(false)

  // TODO deleting other unnecessary words
  const copyToClipboard = () => {
    global.navigator.clipboard.writeText(promptResponse)
    setIsClick(true)
  }

  const sanitizePromptResponse = () => {
    return sanitize(promptResponse, {
      nonTextTags: ['style', 'script', 'textarea', 'option', 'noscript'],
    })
  }

  return (
    <div className='w-1/2 flex-col'>
      <p className='mb-4 text-gray-900'>TypeScript Code</p>
      <div className='flex h-full rounded-r-lg border bg-gray-100 text-center dark:bg-gray-700 '>
        <div className='overflow-y-scroll break-words text-left' style={{ height: '500px' }} dangerouslySetInnerHTML={{ __html: promptResponse }} />
      </div>
    </div>
  )
}
