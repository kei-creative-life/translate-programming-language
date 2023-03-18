import { useContext } from 'react'
import { PromptContext, SelectLangContext } from '../../contexts'

interface PromptViewProps {
  clearPrompt: () => void
  onSubmitClicked: () => Promise<void>
  isLoading: boolean
}

export default function PromptView(props: PromptViewProps) {
  const { clearPrompt, onSubmitClicked, isLoading } = props
  const promptContextValue = useContext(PromptContext)
  const { prompt, updatePrompt } = promptContextValue

  const selectLangContextValue = useContext(SelectLangContext)
  const { input } = selectLangContextValue

  const updatePromptValue = (prompt: string) => {
    updatePrompt(prompt)
  }

  return (
    <div className='mb-8 w-full md:mb-0 md:w-1/2'>
      <div className='mb-4 pr-4'>
        <p className='mb-2 text-xl text-gray-900 dark:text-white'>{`${input || 'JavaScript'}`} Code</p>
        <button className='mr-4 rounded bg-blue-600 px-4 dark:bg-blue-900' onClick={onSubmitClicked}>
          Translate
        </button>
        {/* <button className='rounded bg-blue-600 px-4 dark:bg-blue-900'>Clear</button> */}
      </div>
      <textarea
        onChange={(event) => updatePromptValue(event.target.value)}
        value={prompt}
        placeholder='const number = 10;'
        maxLength={2000}
        className='resize-vertical scrollbar-track-gray-white scrollbar-rounded-lg h-64 h-full w-full rounded-l-lg border bg-white p-4 text-base text-gray-600 scrollbar scrollbar-thumb-white focus:outline-0 dark:border-gray-600 dark:bg-gray-900 md:text-lg'
      ></textarea>
    </div>
  )
}
