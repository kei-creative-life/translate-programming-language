import { useState } from 'react'
import { IconContext } from 'react-icons'
import { RxClipboardCopy } from 'react-icons/rx'

export default function PromptResult({ promptResponse }: any) {
  const [isClick, setIsClick] = useState(false)

  // TODO deleting other unnecessary words
  const copyToClipboard = () => {
    global.navigator.clipboard.writeText(promptResponse)
    setIsClick(true)
  }

  return (
    <div className='mx-4 flex w-1/2 py-3 text-center'>
      <div className='h-full w-full break-words rounded bg-gray-800 p-4 text-left' dangerouslySetInnerHTML={{ __html: promptResponse }} />
      <div className='bg-gray-800 p-4'>
        <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
          <button onClick={copyToClipboard} onAnimationEnd={() => setIsClick(false)}>
            <RxClipboardCopy className={`${isClick && 'animate-scale-up-center'}`} />
            <span>Copy</span>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}
