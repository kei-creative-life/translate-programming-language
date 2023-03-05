import { useRef, useContext } from 'react'
import { PromptContext } from '../contexts'
import { IconContext } from 'react-icons'
import { CgClose } from 'react-icons/cg'

interface PromptViewProps {
  clearPrompt: () => void
}

export default function PromptView({ clearPrompt }: PromptViewProps) {
  const promptContextValue = useContext(PromptContext)
  const { prompt, updatePrompt } = promptContextValue

  const promptTextAreaRef = useRef<HTMLTextAreaElement>(null)

  const updatePromptValue = () => {
    const prompt = `${promptTextAreaRef.current?.value}`
    if (!prompt) return alert('Please enter a prompt')

    updatePrompt(prompt)
  }

  return (
    <div className='relative mx-4 w-1/2 py-3 text-center'>
      <div className='absolute top-6 right-4'>
        <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
          <button onClick={clearPrompt}>
            <CgClose />
          </button>
        </IconContext.Provider>
      </div>
      <textarea
        value={prompt}
        ref={promptTextAreaRef}
        placeholder='const test = "This is test code."'
        className='resize-vertical mr-3 h-full w-full rounded bg-gray-800 p-2'
        onChange={() => updatePromptValue()}
      />
    </div>
  )
}
