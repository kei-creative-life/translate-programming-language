import SelectLang from './SelectLang'
import { BsArrowLeftRight } from 'react-icons/bs'

export default function SelectLangsWrapper() {
  return (
    <div className='my-6 mx-4 flex content-center'>
      <div className='flex w-1/2 flex-col'>
        <div className='mb-2 text-lg'>Translate from </div>
        <SelectLang selectType='before' />
      </div>
      <div className='m-4'>
        <BsArrowLeftRight />
      </div>
      <div className='flex w-1/2 flex-col'>
        <div className='mb-2 text-lg'>Into</div>
        <SelectLang selectType='after' />
      </div>
    </div>
  )
}
