import { MouseEvent, useRef } from 'react'
import SelectLangs from './SelectLangs'

// interface PromptViewProps {
//   isLoading: boolean
//   onSubmitClicked: (prompt: string) => Promise<void>
//   setBeforeLang: React.Dispatch<React.SetStateAction<string>>
// }

export default function PromptView({ isLoading, onSubmitClicked, beforeLang, setBeforeLang, afterLang }: any) {
  const promptTextAreaRef = useRef<HTMLTextAreaElement>(null)

  const onSubmitButtonClicked = (e: MouseEvent<HTMLButtonElement>) => {
    const instruction = `##### Translate this function from ${beforeLang} into ${afterLang}`
    const prompt = `${instruction} ${promptTextAreaRef.current?.value}`
    if (!prompt) return alert('Please enter a prompt')

    onSubmitClicked(prompt)
  }

  const onClearButtonClicked = (e: MouseEvent<HTMLButtonElement>) => {
    if (!promptTextAreaRef.current) return
    promptTextAreaRef.current.value = ''
  }

  return (
    <div className='mx-4 w-1/2 py-3 text-center'>
      <SelectLangs setBeforeLang={setBeforeLang} />
      <div className='p-2'>
        <button
          onClick={onSubmitButtonClicked}
          disabled={isLoading}
          className='mr-3 rounded bg-indigo-700 px-1.5 py-0.5 transition-colors duration-200 hover:bg-indigo-500 disabled:opacity-75'
        >
          Submit
        </button>
        <button
          onClick={onClearButtonClicked}
          disabled={isLoading}
          className='rounded bg-transparent px-1.5 py-0.5 transition-colors duration-200 hover:bg-gray-700 disabled:opacity-75'
        >
          Clear
        </button>
      </div>
      <textarea ref={promptTextAreaRef} placeholder='input' className='resize-vertical mr-3 h-full w-full rounded bg-gray-800 p-2' />
    </div>
  )
}
