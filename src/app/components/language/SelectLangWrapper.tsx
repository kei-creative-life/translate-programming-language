import SelectLang from './SelectLang'
import { BsArrowLeftRight } from 'react-icons/bs'

export default function SelectLangsWrapper() {
  return (
    <div className='my-6 mx-4 flex content-center'>
      <SelectLang selectType='before' />
      <div className='m-4'>
        <BsArrowLeftRight />
      </div>
      <SelectLang selectType='after' />
    </div>
  )
}
