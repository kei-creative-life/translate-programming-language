// import lang from "@lib/lang"
import { MouseEvent, useRef } from "react"

interface PromptViewProps {
  isLoading: boolean
  onSubmitClicked: (prompt: string) => Promise<void>
}

export default function PromptView({
  isLoading,
  onSubmitClicked,
}: PromptViewProps) {
  const promptTextAreaRef = useRef<HTMLTextAreaElement>(null)

  const onSubmitButtonClicked = (ev: MouseEvent<HTMLButtonElement>) => {
    const instruction = `##### Translate this function from  into Haskell`
    const prompt = promptTextAreaRef.current?.value
    if (!prompt) return alert("Please enter a prompt")

    onSubmitClicked(prompt)
  }

  const onClearButtonClicked = (ev: MouseEvent<HTMLButtonElement>) => {
    if (!promptTextAreaRef.current) return
    promptTextAreaRef.current.value = ""
  }

  return (
    <div className="sticky bottom-0 w-full flex-shrink bg-neutral-800 py-3 text-center">
      <textarea
        style={{ height: '500px' }}
        ref={promptTextAreaRef}
        // placeholder={lang.promptPlaceholder}
        placeholder='input'
        className="resize-vertical mr-3 -mb-2 w-3/4 rounded bg-neutral-700 p-2"
      />
      <button
        onClick={onSubmitButtonClicked}
        disabled={isLoading}
        className="mr-3 rounded bg-indigo-700 px-1.5 py-0.5 transition-colors duration-200 hover:bg-indigo-500 disabled:opacity-75"
      >
        Submit
      </button>
      <button
        onClick={onClearButtonClicked}
        disabled={isLoading}
        className="rounded bg-transparent px-1.5 py-0.5 transition-colors duration-200 hover:bg-gray-700 disabled:opacity-75"
      >
        Clear
      </button>
    </div>
  )
}
