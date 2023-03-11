import SelectLang from './SelectLang'
import { BsArrowLeftRight } from 'react-icons/bs'

export default function SelectLangsWrapper() {
  return (
    <div className='flex flex-row md:flex-col'>
      <div className='w-1/2 md:w-full'>
        <div className='mb-2 text-sm md:text-lg'>Translate from </div>
        <SelectLang selectType='before' />
      </div>
      <div className='m-4'>
        <BsArrowLeftRight />
      </div>
      <div className='w-1/2 md:w-full'>
        <div className='mb-2 text-sm md:text-lg'>Into</div>
        <SelectLang selectType='after' />
      </div>
    </div>
  )
}
