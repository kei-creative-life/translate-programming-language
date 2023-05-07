import { useDispatch, useSelector } from 'react-redux'
import { outputLang, setOutputLanguageReducer } from '../../redux/features/LanguageSlice'
import { LangType } from '@/app/types/app'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import SelectBox from '../forms/SelectBox'
import Label from '../forms/Label'

export default function PromptResult({ promptResponse }: any) {
  const dispatch = useDispatch()

  // Handle Input Language
  const langOptions = ['Python', 'JavaScript', 'Ruby', 'Php']
  const outputLanguage = useSelector(outputLang)
  const setOutputLanguage = (langType: LangType): void => {
    dispatch(setOutputLanguageReducer(langType))
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

  return (
    <div className='w-full md:w-1/2'>
      <div className='mb-4 pr-4'>
        <div className='mb-4'>
          <Label text='Translate to' />
          <SelectBox defaultValue='Python' id='output' options={langOptions} onChange={(e) => setOutputLanguage(e.target.value as LangType)} />
        </div>
      </div>
      <div className='flex h-96 rounded-r-lg text-center dark:bg-gray-700'>
        <div className='h-full w-full rounded-r-lg border bg-white text-left text-base text-gray-600 dark:border-gray-600 dark:bg-gray-900 md:text-lg'>
          {promptResponse && (
            <pre>
              <SyntaxHighlighter style={coy} language={convertLangCode()} PreTag='div'>
                {promptResponse}
              </SyntaxHighlighter>
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}
