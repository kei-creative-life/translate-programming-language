import SelectLang from './SelectLang'
import { BsArrowLeftRight } from 'react-icons/bs'

export default function SelectLangsWrapper() {
  return (
    <div className='my-6 mx-4 flex flex-col content-center md:flex-row'>
      <div className='flex w-full flex-col md:w-1/2'>
        <div className='mb-2 text-sm md:text-lg'>Translate from </div>
        <SelectLang selectType='before' />
      </div>
      <div className='m-4'>
        <BsArrowLeftRight />
      </div>
      <div className='flex w-full flex-col md:w-1/2'>
        <div className='mb-2 text-sm md:text-lg'>Into</div>
        <SelectLang selectType='after' />
      </div>
    </div>
  )
}
