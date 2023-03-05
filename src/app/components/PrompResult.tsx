// interface PromptResultProps {
//   promptResponse: string
//   setAfterLang: React.Dispatch<React.SetStateAction<string>>
// }

export default function PromptResult({ promptResponse, setAfterLang }: any) {
  return (
    <div className='mx-4 w-1/2 py-3 text-center'>
      {/* <SelectLangs setAfterLang={setAfterLang} /> */}
      <div className='mr-3 h-full w-full break-words rounded bg-gray-800 p-2 text-left' dangerouslySetInnerHTML={{ __html: promptResponse }} />
    </div>
  )
}
