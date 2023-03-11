import { useState } from 'react'
import sanitize from 'sanitize-html'
import { IconContext } from 'react-icons'
import { RxClipboardCopy } from 'react-icons/rx'

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
    <div className='h-full flex-col'>
      <div className='flex h-full rounded-lg bg-gray-700 py-3 text-center '>
        {/* <div className='h-full w-full break-words p-4 text-left'>No Result...</div> */}
        {/* <textarea className='h-full w-full break-words p-4 text-left' value={promptResponse} /> */}
        <div
          className='h-full w-full overflow-scroll break-words p-4 text-left'
          style={{ height: '500px' }}
          dangerouslySetInnerHTML={{ __html: promptResponse }}
        />
        {/* <div className='px-4 pt-2'>
          <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
            <button onClick={copyToClipboard} onAnimationEnd={() => setIsClick(false)}>
              <RxClipboardCopy className={`${isClick && 'animate-scale-up-center'}`} />
              <span>Copy</span>
            </button>
          </IconContext.Provider>
        </div> */}
      </div>
    </div>
  )
}
