import { useState, useContext, useEffect } from 'react'
import { LangContext, PromptContext } from '../contexts'
import Loading from './Loading'

interface PromptViewProps {
  onSubmitClicked: () => Promise<void>
  isLoading: boolean
}

export default function OrderButton({ onSubmitClicked, isLoading }: PromptViewProps) {
  console.log(isLoading)
  const [isDisabled, setIsDisabled] = useState(true)
  const { beforeLang, afterLang } = useContext(LangContext)
  const { prompt } = useContext(PromptContext)

  const updateIsDisabled = (): void => {
    if (!beforeLang || !afterLang || !prompt) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  useEffect(() => {
    updateIsDisabled()
  }, [beforeLang, afterLang, prompt])

  return (
    <div className='mx-4 flex justify-center '>
      <button
        onClick={onSubmitClicked}
        disabled={isDisabled}
        style={{ display: isLoading ? 'none' : '' }}
        className='mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800'
      >
        <span className='rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>Translate</span>
      </button>
      <Loading isLoading={isLoading} />
    </div>
  )
}
