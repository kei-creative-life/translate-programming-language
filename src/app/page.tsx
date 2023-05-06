'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { inputLang, outputLang } from '@/app/redux/features/LanguageSlice'
import { getPrompt } from '@/app/redux/features/PromptSlice'
import { getTranslatedCode } from './api/transResult'
import PromptResult from './components/prompt/PrompResult'
import PromptView from './components/prompt/PromptView'
import Overlay from './components/Overlay'
import { Hero } from './components/Hero'

export default function Home() {
  // Programming Language
  const inputLanguage = useSelector(inputLang)
  const outputLanguage = useSelector(outputLang)

  // Prompt
  const prompt = useSelector(getPrompt)
  const [promptResponse, setPromptResponse] = useState<string>('')
  const [isGetResponse, setIsGetResponse] = useState<boolean>(false)
  const [promptError, setPromptError] = useState<string>('')
  const [isStartTranslate, setIsStartTranslate] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState(true)

  // Loading
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onPromptSubmit = async () => {
    setPromptError('')
    setIsLoading(true)
    setIsStartTranslate(true)

    try {
      const imperativeSentence = `##### Translate this code from ${inputLanguage} into ${outputLanguage}\n ### ${inputLanguage}\n    \n    ${prompt}\n    \n### ${outputLanguage}`
      const response = await getTranslatedCode(imperativeSentence)
      setPromptResponse(response ?? '')
      setIsLoading(false)
      setIsGetResponse(true)
    } catch (err: any) {
      const errType = err.response.data.error.type
      switch (errType) {
        case 'invalid_request_error':
        case 'server_error':
          setPromptError(errType)
          break

        default:
          setIsLoading(false)
          break
      }
    } finally {
      setIsStartTranslate(false)
    }
  }

  return (
    <main className='grow bg-main-gray dark:bg-gray-800'>
      <div className='flex flex-col'>
        <Overlay isLoading={isLoading} setIsLoading={setIsLoading} promptError={promptError} />
        <Hero />
        <div className='-mt-20 md:-mt-32'>
          <div className='mx-auto mb-8 w-3/4 rounded-lg bg-white p-8 dark:bg-gray-500'>
            <div className='mb-12 flex flex-col pb-12 md:flex-row'>
              <PromptView onSubmitClicked={onPromptSubmit} isLoading={isLoading} />
              <PromptResult promptResponse={promptResponse} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
