import SelectLang from './SelectLang'

export default function SelectLangsWrapper() {
  return (
    <div className='mx-4 my-6 flex content-center'>
      <SelectLang selectType='before' />
      <div className='m-4'>→</div>
      <SelectLang selectType='after' />
    </div>
  )
}
