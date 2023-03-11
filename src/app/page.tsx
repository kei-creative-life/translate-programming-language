'use client'

import { useState } from 'react'
import PromptResult from './components/prompt/PrompResult'
import { getTranslatedCode } from './api/transResult'
import PromptView from './components/prompt/PromptView'
import { LangContext, PromptContext } from './contexts'
import Overlay from './components/Overlay'
import Tutorial from './components/Tutorial'
import OperationWrapper from './components/OperationWrapper'

export default function Home() {
  // Programming Language
  const [langType, setLangType] = useState<string>('')

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
      const response = await getTranslatedCode(`convert ${prompt} from ${langType}.`)
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
    <main className='flex-grow bg-gray-800 md:px-9'>
      <div className='flex flex-col'>
        <Overlay isLoading={isLoading} setIsLoading={setIsLoading} promptError={promptError} />
        <LangContext.Provider value={{ langType, updateLangType }}>
          <Tutorial prompt={prompt} isStartTranslate={isStartTranslate} />
          <div className='flex flex-col-reverse md:flex-row'>
            <PromptContext.Provider value={{ prompt, updatePrompt }}>
              <div className='mx-4 flex flex-grow'>
                <div className='w-full' style={{ height: '650px' }}>
                  <ul className='list-reset flex h-10 rounded-3xl'>
                    <li className='-mb-px mr-1'>
                      <button
                        onClick={() => updateIsProptVisible(true)}
                        className={`${
                          isPromptVisible && 'border-gray-900 bg-gray-900'
                        } font-semi-bold inline-block rounded-t rounded-t py-2 px-4 text-sm md:text-lg`}
                      >
                        Your Prompts
                      </button>
                    </li>
                    <li className='mr-1'>
                      <button
                        onClick={() => updateIsProptVisible(false)}
                        className={`${!isPromptVisible && 'border border-gray-700 bg-gray-700'} ${
                          promptResponse.length === 0 && 'invisible'
                        } inline-block rounded-t border-gray-700 py-2 px-4 text-sm md:text-lg`}
                      >
                        After Code
                      </button>
                    </li>
                  </ul>
                  {isPromptVisible && <PromptView clearPrompt={clearPrompt} onSubmitClicked={onPromptSubmit} isLoading={isLoading} />}
                  {!isPromptVisible && <PromptResult promptResponse={promptResponse} />}
                </div>
              </div>
              <div className='px-4 lg:w-4/12'>
                <OperationWrapper onSubmitClicked={onPromptSubmit} langType={langType} prompt={prompt} />
              </div>
            </PromptContext.Provider>
          </div>
        </LangContext.Provider>
      </div>
    </main>
  )
}
