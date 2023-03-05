import { useRef, useContext } from 'react'
import { PromptContext, LangContext } from '../contexts'

// interface PromptViewProps {
//   isLoading: boolean
//   onSubmitClicked: (prompt: string) => Promise<void>
//   setBeforeLang: React.Dispatch<React.SetStateAction<string>>
// }

export default function PromptView({ isLoading }: any) {
  const langContextValue = useContext(LangContext)
  const { beforeLang, afterLang } = langContextValue

  const promptContextValue = useContext(PromptContext)
  const { updatePrompt } = promptContextValue

  const promptTextAreaRef = useRef<HTMLTextAreaElement>(null)

  const updatePromptValue = () => {
    const instruction = `##### Translate this code from ${beforeLang} into ${afterLang} \n### ${beforeLang}\n`
    const prompt = `${instruction} ${promptTextAreaRef.current?.value}    \n### ${afterLang}`
    if (!prompt) return alert('Please enter a prompt')

    updatePrompt(prompt)
  }

  return (
    <div className='mx-4 w-1/2 py-3 text-center'>
      <textarea
        ref={promptTextAreaRef}
        placeholder='const test = "This is test code."'
        className='resize-vertical mr-3 h-full w-full rounded bg-gray-800 p-2'
        onChange={() => updatePromptValue()}
      />
    </div>
  )
}
