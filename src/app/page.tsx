'use client'

import { useState } from 'react'
import PromptResult from './components/prompt/PrompResult'
import PromptView from './components/prompt/PromptView'
import Overlay from './components/common/Overlay'
import Hero from './components/common/Hero'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <main className='grow bg-main-gray dark:bg-gray-800'>
      <div className='flex flex-col'>
        {/* <Overlay isLoading={isLoading} setIsLoading={setIsLoading} promptError={promptError} /> */}
        <Overlay isLoading={isLoading} setIsLoading={setIsLoading} promptError='invalid_request_error' />
        <Hero />
        <div className='-mt-20 md:-mt-32'>
          <div className='mx-auto mb-8 w-3/4 rounded-lg bg-white p-8 dark:bg-gray-500'>
            <div className='mb-12 flex flex-col pb-12 md:flex-row'>
              <PromptView isLoading={isLoading} />
              <PromptResult promptResponse='' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
