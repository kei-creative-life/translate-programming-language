'use client'

import { useState } from 'react'
import PromptResult from './components/prompt/PrompResult'
import { getTranslatedCode } from './api/transResult'
import PromptView from './components/prompt/PromptView'
import { LangContext, PromptContext, SelectLangContext } from './contexts'
import Overlay from './components/Overlay'
import OperationWrapper from './components/OperationWrapper'
import { Hero } from './components/Hero'
import { TranslateOptions } from './components/language/TranslateOptions'

export default function Home() {
  // Programming Language
  const [langType, setLangType] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')

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

  const updateLangType = (langType: string): void => {
    setLangType(langType)
  }

  const updateInput = (langType: string): void => {
    setInput(langType)
  }

  const updateOutput = (langType: string): void => {
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
      const response = await getTranslatedCode(`translate "${prompt}" from ${input} into ${output}.`)
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
    <main className='flex-grow bg-gray-100 dark:bg-gray-800'>
      <div className='flex flex-col'>
        <Overlay isLoading={isLoading} setIsLoading={setIsLoading} promptError={promptError} />
        <Hero />
        <LangContext.Provider value={{ langType, updateLangType }}>
          <div className='-mt-20 md:-mt-32'>
            <PromptContext.Provider value={{ prompt, updatePrompt }}>
              {/* <div className='px-4 lg:w-4/12'>
                <OperationWrapper onSubmitClicked={onPromptSubmit} langType={langType} prompt={prompt} />
              </div> */}
              <div className='mx-auto mb-8 w-3/4 rounded-lg bg-white p-8 dark:bg-gray-500'>
                <SelectLangContext.Provider value={{ input, updateInput, output, updateOutput }}>
                  <TranslateOptions />
                  <div className='mb-12 flex pb-12'>
                    <PromptView clearPrompt={clearPrompt} onSubmitClicked={onPromptSubmit} isLoading={isLoading} />
                    <PromptResult promptResponse={promptResponse} />
                  </div>
                </SelectLangContext.Provider>
              </div>
            </PromptContext.Provider>
          </div>
        </LangContext.Provider>
      </div>
    </main>
  )
}
