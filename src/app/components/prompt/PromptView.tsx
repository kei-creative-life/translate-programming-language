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
  const { beforeLang, afterLang } = useContext(LangContext)
  const promptContextValue = useContext(PromptContext)
  const { prompt, updatePrompt } = promptContextValue
  const [lowerPrompt, setLowerPrompt] = useState('')
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
    // if (!beforeLang || !afterLang || !prompt) {
    //   setIsDisabled(true)
    // } else {
    //   setIsDisabled(false)
    // }
  }

  useEffect(() => {
    convertToLowerCase()
    updateIsDisabled()
  }, [beforeLang, afterLang, prompt])

  return (
    <div className='flex- mb-4 h-full flex-col'>
      <div className='flex h-full rounded-b-lg bg-gray-800 pb-4 text-center'>
        <div className='w-full'>
          {/* <CodeEditor
            value={prompt}
            language={lowerPrompt}
            placeholder={`Please enter ${beforeLang} code.`}
            onChange={(event) => updatePromptValue(event.target.value)}
            padding={16}
            className='scrollbar-track-gray-white w-full rounded text-sm scrollbar scrollbar-thumb-white md:text-lg'
            style={{
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              height: '590px',
              overflowY: 'scroll',
              resize: 'vertical',
            }}
          /> */}
          <textarea
            onChange={(event) => updatePromptValue(event.target.value)}
            value={prompt}
            placeholder='const number = 10;'
            maxLength={2000}
            className='resize-vertical scrollbar-track-gray-white scrollbar-rounded-lg w-full rounded bg-gray-900 p-4 text-base scrollbar scrollbar-thumb-white md:text-lg'
            style={{ height: '500px' }}
          ></textarea>
        </div>
      </div>
    </div>
  )
}
