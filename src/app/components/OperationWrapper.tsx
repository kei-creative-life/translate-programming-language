import { IconContext } from 'react-icons'
import { BsTranslate } from 'react-icons/bs'
import SelectLangModal from './language/SelectLangModal'

export default function OperationWrapper(props: any) {
  const { onSubmitClicked, prompt, langType } = props

  return (
    <div className='mb:mb-0 mb-10 rounded bg-white p-8 dark:bg-gray-900'>
      <div className='mb-4 pb-3 text-2xl'>
        <h2 className='text-center text-xl font-semibold text-gray-800 underline dark:text-white'>How to use "Cheat Programming"？</h2>
      </div>
      <div className='mt-8 mb-6 w-full rounded-lg bg-gray-100 p-4 dark:bg-gray-800 md:mb-0'>
        <p className='mb-4 text-gray-800 dark:text-white'>
          <span className='text-xl font-bold'>Step1. </span>
          <span> Select programming languages.</span>
        </p>
        <SelectLangModal />
      </div>
      <div className='mt-8 mb-6 w-full rounded-lg bg-gray-100 p-4 dark:bg-gray-800 md:mb-0'>
        <p className='mb-4 text-gray-800 dark:text-white'>
          <span className='text-xl font-bold'>Step2. </span>
          <span>Press "Generate Code" button below.</span>
        </p>
        <p className='mb-4 text-gray-800 dark:text-white'>You can translated programming code within seconds.</p>
        <IconContext.Provider value={{ color: 'white', size: '16px' }}>
          <button
            onClick={onSubmitClicked}
            disabled={prompt.length === 0 || !langType}
            className={`${
              (prompt.length === 0 || !langType) && 'cursor-not-allowed'
            } flex w-full cursor-pointer items-center justify-center rounded-lg border bg-blue-600 py-2 dark:border-blue-800 dark:bg-blue-800 dark:hover:bg-blue-600`}
          >
            <BsTranslate />
            <span className='mx-4 text-lg'>Generate Code</span>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}
