'use client'

import { useState } from 'react'
import PromptResult from './components/prompt/PrompResult'
import { getTranslatedCode } from './api/transResult'
import PromptView from './components/prompt/PromptView'
import OrderButton from './components/OrderButton'
import { BiRightArrow } from 'react-icons/bi'
import { BsTranslate } from 'react-icons/bs'
import SelectLangsWrapper from './components/language/SelectLangWrapper'

import { LangContext, PromptContext } from './contexts'
import Overlay from './components/Overlay'

export default function Home() {
  // Programming Language
  const [beforeLang, setBeforeLang] = useState<string>('')
  const [afterLang, setAfterLang] = useState<string>('')

  // Prompt
  const [prompt, setPrompt] = useState<string>('')
  const [promptResponse, setPromptResponse] = useState<string>('')
  const [isGetResponse, setIsGetResponse] = useState<boolean>(false)

  // Loading
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [isProptVisible, setIsProptVisible] = useState<boolean>(true)

  const updateBeforeLang = (e: any): void => {
    const beforeValue = e.target.value
    setBeforeLang(beforeValue)
  }

  const updateAfterLang = (e: any): void => {
    const afterValue = e.target.value
    setAfterLang(afterValue)
  }

  const updatePrompt = (prompt: string) => {
    setPrompt(prompt)
  }

  const clearPrompt = (): void => {
    setPrompt('')
  }

  const onPromptSubmit = async () => {
    const instruction = `##### Translate this code from ${beforeLang} into ${afterLang} \n### ${beforeLang}\n`
    const secondInstruction = `\n### ${afterLang}`
    // Loading...
    setIsLoading(true)

    // Response...
    try {
      const response = await getTranslatedCode(`${instruction}${prompt}${secondInstruction}`)
      setPromptResponse(response ?? '')
      setIsLoading(false)
      setIsGetResponse(true)
    } catch (err) {
      setIsLoading(false)
    }
  }

  const updateIsProptVisible = (flag: boolean): void => {
    if (isProptVisible === flag) return
    setIsProptVisible(flag)
  }

  return (
    <main className='flex-grow bg-gray-800 px-9'>
      <div className='flex flex-col' style={{ minHeight: '700px' }}>
        <Overlay isLoading={isLoading} />
        <LangContext.Provider value={{ beforeLang, updateBeforeLang, afterLang, updateAfterLang }}>
          <div className='m-6 w-full'>
            <p className='text-2xl'>You can translate from one programming language to another target languages on this web site.</p>
            <ul className='m-4 text-lg'>
              <li className='mb-2'>1. Select "Translate from" programming language.</li>
              <li className='mb-2'>2. Select "Translate into" programming language.</li>
              <li className='mb-2'>
                <span>3. Write programming language.</span>
              </li>
              <li className='mb-2 flex content-center'>
                <span className='mr-2'>4.Press </span>
                <span className='mr-2'>
                  <p className='cursor-pointer rounded-full border border-gray-700 bg-gray-700 p-2'>
                    <BsTranslate />
                  </p>
                </span>
                <span>button.</span>
              </li>
              <li className='mb-2'>
                <span>5. Press "After Code" tab. You can get translated programming language !!!</span>
              </li>
            </ul>
          </div>
          <SelectLangsWrapper />
          <PromptContext.Provider value={{ prompt, updatePrompt }}>
            {/* <OrderButton onSubmitClicked={onPromptSubmit} isLoading={isLoading} /> */}
            <div className='m-4 flex flex-grow'>
              <div className='w-full'>
                <ul className='list-reset flex rounded-3xl'>
                  <li className='-mb-px mr-1'>
                    <button
                      onClick={() => updateIsProptVisible(true)}
                      className={`${isProptVisible && 'border-gray-700 bg-gray-700'} font-semi-bold inline-block rounded-t rounded-t py-2 px-4 text-lg`}
                    >
                      Before Code
                    </button>
                  </li>
                  <li className='mr-1'>
                    <button
                      onClick={() => updateIsProptVisible(false)}
                      className={`${
                        !isProptVisible && 'border border-gray-700 bg-gray-700'
                      } inline-block cursor-not-allowed rounded-t border-gray-700 py-2 px-4 text-lg`}
                    >
                      After Code
                    </button>
                  </li>
                </ul>
                {isProptVisible && <PromptView clearPrompt={clearPrompt} onSubmitClicked={onPromptSubmit} isLoading={isLoading} />}
                {!isProptVisible && <PromptResult promptResponse={promptResponse} />}
              </div>
            </div>
          </PromptContext.Provider>
        </LangContext.Provider>
      </div>
    </main>
  )
}
