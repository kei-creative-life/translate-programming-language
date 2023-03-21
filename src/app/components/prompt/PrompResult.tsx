import { useState, useContext } from 'react'
import { LangType } from '@/app/types/app'
import { SelectLangContext } from '../../contexts'
// import rehypeRaw from 'rehype-raw'
// import rehypeSanitize from 'rehype-sanitize'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function PromptResult({ promptResponse }: any) {
  const [isClick, setIsClick] = useState(false)
  const selectLangContextValue = useContext(SelectLangContext)

  const { output, updateOutput } = selectLangContextValue

  // TODO deleting other unnecessary words
  const copyToClipboard = () => {
    global.navigator.clipboard.writeText(promptResponse)
    setIsClick(true)
  }

  const convertLangCode = (lang: string) => {
    switch (lang) {
      case 'JavaScript':
        return 'js'
      case 'TypeScript':
        return 'ts'
      case 'Ruby':
        return 'ruby'
      case 'Python':
        return 'python'
      case 'Php':
        return 'php'
      default:
        return 'js'
    }
  }

  const langOptions = ['JavaScript', 'Ruby', 'Python', 'Php']

  return (
    <div className='w-full md:w-1/2'>
      <div className='mb-4 pr-4'>
        <div className='mb-4'>
          <label htmlFor='output' className='mb-2 block text-xl font-medium text-gray-900 dark:text-white'>
            Translate To{' '}
          </label>
          <select
            id='output'
            onChange={(e) => updateOutput(e.target.value as LangType)}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          >
            {langOptions.map((langOption) => (
              <option key={langOption} value={langOption}>
                {langOption}
              </option>
            ))}
          </select>
        </div>
        {/* <button className='rounded bg-blue-600 px-4 dark:bg-blue-900' onClick={copyToClipboard}>
          Copy
        </button> */}
      </div>
      <div className='flex h-96 rounded-r-lg text-center dark:bg-gray-700'>
        <div className='h-full w-full rounded-r-lg border bg-white text-left text-base text-gray-600 dark:border-gray-600 dark:bg-gray-900 md:text-lg'>
          <pre>
            <SyntaxHighlighter
              style={coy}
              language={convertLangCode(output)}
              PreTag='div'
              children={promptResponse}
              // rehypePlugins={[rehypeRaw, rehypeSanitize]}
            />
          </pre>
        </div>
      </div>
    </div>
  )
}
