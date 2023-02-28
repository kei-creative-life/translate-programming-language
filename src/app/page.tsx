'use client'

import { useState } from 'react'
import PromptResult from './components/PrompResult'
import PromptView from './components/PromptView'
import OrderButton from './components/OrderButton'
import { getTranslatedCode } from './api/transResult'

export default function Home() {
  // Programming Language
  const [beforeLang, setBeforeLang] = useState<string>('javascript')
  const [afterLang, setAfterLang] = useState<string>('javascript')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [promptResponse, setPromptResponse] = useState<string>('')

  const onPromptSubmit = async (prompt: string) => {
    // Loading...
    setIsLoading(true)

    // Response...
    try {
      const response = await getTranslatedCode(prompt)
      setPromptResponse(response ?? '')
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  return (
    <main className='flex-grow'>
      <div className='flex flex-col' style={{ height: '900px' }}>
        <OrderButton onSubmitClicked={onPromptSubmit} />
        <div className='flex flex-grow'>
          <PromptView isLoading={isLoading} onSubmitClicked={onPromptSubmit} beforeLang={beforeLang} afterLang={afterLang} setBeforeLang={setBeforeLang} />
          <PromptResult promptResponse={promptResponse} setAfterLang={setAfterLang} />
        </div>
      </div>
    </main>
  )
}
