'use client'

import { useState } from 'react'
import { LangType } from './types/app'
import { getTranslatedCode } from './api/transResult'
import { LangContext, PromptContext } from './contexts'
import PromptResult from './components/prompt/PrompResult'
import PromptView from './components/prompt/PromptView'
import Overlay from './components/Overlay'
import { Hero } from './components/Hero'

export default function Home() {
  // Programming Language
  const [langType, setLangType] = useState<string>('')
  const [input, setInput] = useState<LangType>('Ruby')
  const [output, setOutput] = useState<LangType>('Python')

  // Prompt
  const [prompt, setPrompt] = useState<string>('')
  const [promptResponse, setPromptResponse] = useState<string>('')
  const [isGetResponse, setIsGetResponse] = useState<boolean>(false)
  const [promptError, setPromptError] = useState<string>('')
  const [isStartTranslate, setIsStartTranslate] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState(true)

  // Loading
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPromptVisible, setIsPromptVisible] = useState<boolean>(true)

  const updateLangType = (langType: LangType): void => {
    setLangType(langType)
  }

  const updateInput = (langType: LangType): void => {
    setInput(langType)
  }

  const updateOutput = (langType: LangType): void => {
    setOutput(langType)
  }

  const updatePrompt = (prompt: string) => {
    setPrompt(prompt)
  }

  const clearPrompt = (): void => {
    setPrompt('')
  }

  const onPromptSubmit = async () => {
    setPromptError('')
    // Loading...
    setIsLoading(true)
    setIsStartTranslate(true)

    // Response...
    try {
      const imperativeSentence = `##### Translate this code from ${input} into ${output}\n ### ${input}\n    \n    ${prompt}\n    \n### ${output}`
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

  const updateIsProptVisible = (flag: boolean): void => {
    if (isPromptVisible === flag) return
    setIsPromptVisible(flag)
  }

  return (
    <main className='grow bg-gray-100 dark:bg-gray-800'>
      <div className='flex flex-col'>
        <Overlay isLoading={isLoading} setIsLoading={setIsLoading} promptError={promptError} />
        <Hero />
        <LangContext.Provider value={{ langType, updateLangType }}>
          <div className='-mt-20 md:-mt-32'>
            <PromptContext.Provider value={{ prompt, updatePrompt }}>
              <div className='mx-auto mb-8 w-3/4 rounded-lg bg-white p-8 dark:bg-gray-500'>
                <div className='mb-12 flex flex-col pb-12 md:flex-row'>
                  <PromptView clearPrompt={clearPrompt} onSubmitClicked={onPromptSubmit} isLoading={isLoading} />
                  <PromptResult promptResponse={promptResponse} />
                </div>
              </div>
            </PromptContext.Provider>
          </div>
        </LangContext.Provider>
      </div>
    </main>
  )
}
