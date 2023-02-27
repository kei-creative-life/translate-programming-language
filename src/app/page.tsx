"use client"

import { useState } from 'react';
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import PromptView from './components/PromptView';
import { getTranslatedCode } from './api/transResult';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [promptResponse, setPromptResponse] = useState<string>("")

  const onPromptSubmit = async (prompt: string) => {
    // Loading...
    setIsLoading(true)

    // Response...
    try {
      const response = await getTranslatedCode(prompt)
      setPromptResponse(response ?? "")
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  return (
    <main className={styles.main}>
      <p>Result:</p>
      <article dangerouslySetInnerHTML={{ __html: promptResponse }}></article>
      <PromptView isLoading={isLoading} onSubmitClicked={onPromptSubmit} />
    </main>
  )
}