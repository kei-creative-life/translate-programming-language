import { useContext, useState, useEffect } from 'react'
// import dynamic from 'next/dynamic'
// import '@uiw/react-textarea-code-editor/dist.css'
import { LangContext, PromptContext } from '../../contexts'
import { IconContext } from 'react-icons'

interface PromptViewProps {
  clearPrompt: () => void
  onSubmitClicked: () => Promise<void>
  isLoading: boolean
}

// const CodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), { ssr: false })

export default function PromptView(props: PromptViewProps) {
  const { clearPrompt, onSubmitClicked, isLoading } = props
  const promptContextValue = useContext(PromptContext)
  const { prompt, updatePrompt } = promptContextValue

  const updatePromptValue = (prompt: string) => {
    updatePrompt(prompt)
  }

  const updateIsDisabled = (): void => {
    // if (!beforeLang || !afterLang || !prompt) {
    //   setIsDisabled(true)
    // } else {
    //   setIsDisabled(false)
    // }
  }

  useEffect(() => {
    updateIsDisabled()
  }, [prompt])

  return (
    <div className='flex- mb-4 h-full flex-col'>
      <div className='flex h-full rounded-b-lg bg-gray-800 pb-4 text-center'>
        <div className='w-full'>
          <textarea
            onChange={(event) => updatePromptValue(event.target.value)}
            value={prompt}
            placeholder='const number = 10;'
            maxLength={2000}
            className='resize-vertical scrollbar-track-gray-white scrollbar-rounded-lg w-full rounded bg-gray-900 p-4 text-base scrollbar scrollbar-thumb-white focus:outline-0 md:text-lg'
            style={{ height: '500px' }}
          ></textarea>
        </div>
      </div>
    </div>
  )
}
