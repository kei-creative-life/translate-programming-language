'use client'

import { useState } from 'react'
import PromptResult from './components/PrompResult'
import PromptView from './components/PromptView'
import OrderButton from './components/OrderButton'
import { getTranslatedCode } from './api/transResult'

export default function Home() {
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
    <main className='h-screen flex-grow'>
      <div className='flex h-full flex-col'>
        <OrderButton />
        <div className='flex flex-grow'>
          <PromptView isLoading={isLoading} onSubmitClicked={onPromptSubmit} />
          <PromptResult promptResponse={promptResponse} />
        </div>
      </div>
    </main>
  )
}
