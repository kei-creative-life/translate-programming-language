import SelectLang from './SelectLang'

export default function SelectLangsWrapper() {
  return (
    <>
      <div className='m-4 flex'>
        <SelectLang selectType='before' />
        <div className='m-4'>→</div>
        <SelectLang selectType='after' />
      </div>
    </>
  )
}
