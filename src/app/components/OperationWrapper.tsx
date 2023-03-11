import { IconContext } from 'react-icons'
import { BsTranslate } from 'react-icons/bs'
import SelectLangsWrapper from './language/SelectLangWrapper'

export default function OperationWrapper(props: any) {
  const { onSubmitClicked, isDisabled } = props

  return (
    <div className=''>
      <SelectLangsWrapper />
      <div className='mt-8 w-full'>
        <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
          <button
            onClick={onSubmitClicked}
            // disabled={isDisabled}
            className={`${
              isDisabled && 'cursor-not-allowed'
            } flex w-full cursor-pointer content-center justify-center rounded-lg border border-gray-900 bg-gray-900 py-2`}
          >
            <BsTranslate />
            <span className='mx-4 text-lg'>Generate Code</span>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}
