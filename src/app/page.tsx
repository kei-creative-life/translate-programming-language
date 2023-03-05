'use client'

import { useState } from 'react'
import PromptResult from './components/PrompResult'
import { getTranslatedCode } from './api/transResult'
import PromptView from './components/PromptView'
import OrderButton from './components/OrderButton'
import SelectLangsWrapper from './components/SelectLangWrapper'

import { LangContext, PromptContext } from './contexts'
import Overlay from './components/Overlay'

export default function Home() {
  // Programming Language
  const [beforeLang, setBeforeLang] = useState<string>('')
  const [afterLang, setAfterLang] = useState<string>('')

  // Prompt
  const [prompt, setPrompt] = useState<string>('')
  const [promptResponse, setPromptResponse] = useState<string>('')

  // Loading
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    } catch (err) {
      setIsLoading(false)
    }
  }

  return (
    <main className='flex-grow'>
      <div className='flex flex-col' style={{ height: '900px' }}>
        <Overlay isLoading={isLoading} />
        <LangContext.Provider value={{ beforeLang, updateBeforeLang, afterLang, updateAfterLang }}>
          <SelectLangsWrapper />
          <PromptContext.Provider value={{ prompt, updatePrompt }}>
            <OrderButton onSubmitClicked={onPromptSubmit} isLoading={isLoading} />
            <div className='flex flex-grow'>
              <PromptView clearPrompt={clearPrompt} />
              <PromptResult promptResponse={promptResponse} />
            </div>
          </PromptContext.Provider>
        </LangContext.Provider>
      </div>
    </main>
  )
}
