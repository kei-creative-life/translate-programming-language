import { useState, useContext } from 'react'
import { SelectLangContext } from '../../contexts'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

export default function PromptResult({ promptResponse }: any) {
  const [isClick, setIsClick] = useState(false)
  const selectLangContextValue = useContext(SelectLangContext)

  const { output } = selectLangContextValue

  // TODO deleting other unnecessary words
  const copyToClipboard = () => {
    global.navigator.clipboard.writeText(promptResponse)
    setIsClick(true)
  }

  return (
    <div className='w-full md:w-1/2'>
      <div className='mb-4 pr-4'>
        <p className='mb-2 text-xl text-gray-900 dark:text-white'>{`${output || 'TypeScript'} Code`}</p>
        <button className='rounded bg-blue-600 px-4 dark:bg-blue-900' onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className='flex h-full rounded-r-lg text-center dark:bg-gray-700'>
        <div className='resize-vertical scrollbar-track-gray-white scrollbar-rounded-lg h-full w-full rounded-r-lg border bg-white p-4 text-left text-base text-gray-600 scrollbar scrollbar-thumb-white focus:outline-0 dark:border-gray-600 dark:bg-gray-900 md:text-lg'>
          <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{promptResponse}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
