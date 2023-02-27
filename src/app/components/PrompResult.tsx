interface PromptResultProps {
  promptResponse: string
}

export default function PromptResult({ promptResponse }: PromptResultProps) {
  return (
    <div className='mx-4 w-1/2 py-3 text-center'>
      <div className='mr-3 h-full w-full rounded bg-gray-700 p-2 text-left' dangerouslySetInnerHTML={{ __html: promptResponse }} />
      {/* <textarea placeholder='input' className='resize-vertical mr-3 h-full w-full rounded bg-gray-700 p-2' value={promptResponse} disabled /> */}
    </div>
  )
}
