import { useContext, useEffect } from 'react'
import { PromptContext } from '../../contexts'

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
    <div className='w-1/2'>
      <p className='mb-4 text-gray-900'>JavaScript Code</p>
      <textarea
        onChange={(event) => updatePromptValue(event.target.value)}
        value={prompt}
        placeholder='const number = 10;'
        maxLength={2000}
        className='resize-vertical scrollbar-track-gray-white scrollbar-rounded-lg h-full w-full rounded-l-lg border bg-white bg-gray-100  p-4 text-base text-gray-600 scrollbar scrollbar-thumb-white focus:outline-0 dark:bg-gray-900 md:text-lg'
      ></textarea>
    </div>
  )
}
