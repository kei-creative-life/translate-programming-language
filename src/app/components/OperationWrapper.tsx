import { IconContext } from 'react-icons'
import { BsTranslate } from 'react-icons/bs'
import SelectLangModal from './language/SelectLangModal'

export default function OperationWrapper(props: any) {
  const { onSubmitClicked, prompt, langType } = props

  return (
    <div className='mb:mb-0 mt-10 mb-10 rounded bg-gray-900 p-8'>
      <div className='mb-4 pb-3 text-2xl'>
        <h2 className='text-xl font-semibold underline'>How to use "Cheat Programming"？</h2>
      </div>
      <SelectLangModal />
      <div className='mt-8 mb-6 w-full rounded-lg bg-gray-800 p-4 md:mb-0'>
        <p className='mb-4'>
          <span className='text-xl font-bold'>Step2. </span>
          <span>Press "Generate Code" button below.</span>
        </p>
        <p className='mb-4'>You can translated programming code within seconds.</p>
        <IconContext.Provider value={{ color: 'white', size: '16px' }}>
          <button
            onClick={onSubmitClicked}
            disabled={prompt.length === 0 || !langType}
            className={`${
              (prompt.length === 0 || !langType) && 'cursor-not-allowed'
            } flex w-full cursor-pointer items-center justify-center rounded-lg border border-blue-800 bg-blue-800 py-2 hover:bg-blue-600`}
          >
            <BsTranslate />
            <span className='mx-4 text-lg'>Generate Code</span>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}
