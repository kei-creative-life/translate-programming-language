import { useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import '@uiw/react-textarea-code-editor/dist.css'
import { LangContext, PromptContext } from '../../contexts'
import { IconContext } from 'react-icons'
import { BsTranslate } from 'react-icons/bs'

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
  const [isMountedPrompt, setIsMountedPrompt] = useState(true)

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
        <ul className='border-r py-4 text-sm md:text-lg'>
          <li className='mx-2'>1</li>
          <li className='mx-2'>2</li>
          <li className='mx-2'>3</li>
          <li className='mx-2'>4</li>
          <li className='mx-2'>5</li>
          <li className='mx-2'>6</li>
          <li className='mx-2'>7</li>
          <li className='mx-2'>8</li>
          <li className='mx-2'>9</li>
          <li className='mx-2'>10</li>
        </ul>
        <div className='w-full'>
          <CodeEditor
            value={prompt}
            language={lowerPrompt}
            placeholder={`Please enter ${beforeLang} code.`}
            onChange={(event) => updatePromptValue(event.target.value)}
            padding={16}
            className='resize-vertical h-full w-full rounded text-sm md:text-lg'
            style={{
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>
        <div className='px-4 pt-2'>
          <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
            <button
              onClick={onSubmitClicked}
              // disabled={isDisabled}
              disabled
              className={`${isDisabled && 'cursor-not-allowed'} cursor-pointer rounded-full border border-gray-800 bg-gray-800 p-2`}
            >
              <BsTranslate />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}
