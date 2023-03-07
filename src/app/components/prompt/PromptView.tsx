import { useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import '@uiw/react-textarea-code-editor/dist.css'
import { LangContext, PromptContext } from '../../contexts'
import { IconContext } from 'react-icons'
import { TbTransformFilled } from 'react-icons/tb'

interface PromptViewProps {
  clearPrompt: () => void
  onSubmitClicked: () => Promise<void>
  isLoading: boolean
}

const CodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), { ssr: false })

export default function PromptView(props: PromptViewProps) {
  const { clearPrompt, onSubmitClicked, isLoading } = props
  const { beforeLang, afterLang } = useContext(LangContext)
  const promptContextValue = useContext(PromptContext)
  const { prompt, updatePrompt } = promptContextValue
  const [lowerPrompt, setLowerPrompt] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const updatePromptValue = (prompt: string) => {
    updatePrompt(prompt)
  }

  const convertToLowerCase = () => {
    if (beforeLang) {
      const lowerLanguage = beforeLang.toLowerCase()
      setLowerPrompt(lowerLanguage)
    }
  }

  const updateIsDisabled = (): void => {
    if (!beforeLang || !afterLang || !prompt) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  useEffect(() => {
    convertToLowerCase()
    updateIsDisabled()
  }, [beforeLang, afterLang, prompt])

  return (
    <div className='flex- mb-4 h-full flex-col'>
      <div className='flex h-full rounded-b-lg bg-gray-700 py-3 text-center'>
        <CodeEditor
          value={prompt}
          language={lowerPrompt}
          placeholder={`Please enter ${beforeLang} code.`}
          onChange={(event) => updatePromptValue(event.target.value)}
          padding={16}
          className='resize-vertical h-full w-full rounded'
          style={{
            fontSize: 18,
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />
        <div className='px-4 pt-2'>
          <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
            <button onClick={onSubmitClicked} disabled={isDisabled} className='cursor-pointer rounded-full border border-gray-800 bg-gray-800 p-2'>
              <TbTransformFilled />
            </button>
          </IconContext.Provider>
          <p className='my-2 font-bold'>Translate</p>
        </div>
      </div>
    </div>
  )
}
