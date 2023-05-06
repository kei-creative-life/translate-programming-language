import { useDispatch, useSelector } from 'react-redux'
import { outputLang, setOutputLanguageReducer } from '../../redux/features/LanguageSlice'
import { LangType } from '@/app/types/app'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function PromptResult({ promptResponse }: any) {
  const dispatch = useDispatch()

  // Handle Input Language
  const outputLanguage = useSelector(outputLang)
  const setOutputLanguage = (outputLangValue: string): void => {
    dispatch(setOutputLanguageReducer(outputLangValue))
  }

  const convertLangCode = () => {
    switch (outputLanguage) {
      case 'Python':
        return 'python'
      case 'JavaScript':
        return 'js'
      case 'Ruby':
        return 'ruby'
      case 'Php':
        return 'php'
      default:
        return 'js'
    }
  }

  const langOptions = ['Python', 'JavaScript', 'Ruby', 'Php']

  return (
    <div className='w-full md:w-1/2'>
      <div className='mb-4 pr-4'>
        <div className='mb-4'>
          <label htmlFor='output' className='mb-2 block font-main text-xl font-medium text-gray-900 dark:text-white'>
            Translate To{' '}
          </label>
          <select
            id='output'
            onChange={(e) => setOutputLanguage(e.target.value as LangType)}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          >
            {langOptions.map((langOption) => (
              <option key={langOption} value={langOption}>
                {langOption}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex h-96 rounded-r-lg text-center dark:bg-gray-700'>
        <div className='h-full w-full rounded-r-lg border bg-white text-left text-base text-gray-600 dark:border-gray-600 dark:bg-gray-900 md:text-lg'>
          {promptResponse && (
            <pre>
              <SyntaxHighlighter style={coy} language={convertLangCode()} PreTag='div' children={promptResponse} />
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}
