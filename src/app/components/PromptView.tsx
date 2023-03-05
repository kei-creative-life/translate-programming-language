import { useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import '@uiw/react-textarea-code-editor/dist.css'
import { LangContext, PromptContext } from '../contexts'
import { IconContext } from 'react-icons'
import { CgClose } from 'react-icons/cg'

interface PromptViewProps {
  clearPrompt: () => void
}

const CodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), { ssr: false })

export default function PromptView({ clearPrompt }: PromptViewProps) {
  const { beforeLang } = useContext(LangContext)
  const promptContextValue = useContext(PromptContext)
  const { prompt, updatePrompt } = promptContextValue
  const [lowerPrompt, setLowerPrompt] = useState('')

  const updatePromptValue = (prompt: string) => {
    updatePrompt(prompt)
  }

  const convertToLowerCase = () => {
    if (beforeLang) {
      const lowerLanguage = beforeLang.toLowerCase()
      setLowerPrompt(lowerLanguage)
    }
  }

  useEffect(() => {
    convertToLowerCase()
  }, [beforeLang])

  return (
    <div className='mx-4 flex w-1/2 py-3 text-center'>
      <CodeEditor
        value={prompt}
        language={lowerPrompt}
        placeholder={`Please enter ${beforeLang} code.`}
        onChange={(event) => updatePromptValue(event.target.value)}
        padding={16}
        className='resize-vertical h-full w-full rounded'
        style={{
          fontSize: 16,
          backgroundColor: '#202A37',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
      <div className='bg-gray-800 p-4'>
        <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
          <button onClick={clearPrompt}>
            <CgClose />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}
