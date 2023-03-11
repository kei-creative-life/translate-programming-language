import { IconContext } from 'react-icons'
import { BsTranslate } from 'react-icons/bs'
import SelectLangsWrapper from './language/SelectLangWrapper'

export default function OperationWrapper(props: any) {
  const { onSubmitClicked, isDisabled } = props

  return (
    <div className=''>
      <SelectLangsWrapper />
      <div className='mt-8 mb-6 w-full md:mb-0'>
        <IconContext.Provider value={{ color: 'white', size: '16px' }}>
          <button
            onClick={onSubmitClicked}
            // disabled={isDisabled}
            className={`${
              isDisabled && 'cursor-not-allowed'
            } flex w-full cursor-pointer items-center justify-center rounded-lg border border-blue-800 bg-blue-800 py-2 shadow-md shadow-gray-700 hover:bg-blue-600`}
          >
            <BsTranslate />
            <span className='mx-4 text-lg'>Generate Code</span>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}
