import SelectLang from './SelectLang'
import { BsArrowLeftRight } from 'react-icons/bs'

export default function SelectLangsWrapper() {
  return (
    <div className='flex flex-row md:flex-col'>
      <div>
        <div className='mb-2 text-sm md:text-lg'>Translate from </div>
        <SelectLang selectType='before' />
      </div>
      <div className='m-4'>
        <BsArrowLeftRight />
      </div>
      <div>
        <div className='mb-2 text-sm md:text-lg'>Into</div>
        <SelectLang selectType='after' />
      </div>
    </div>
  )
}
