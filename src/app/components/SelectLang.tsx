import { useContext } from 'react'
import { LangContext } from '../contexts'

type SelectType = 'before' | 'after'

export default function SelectLang(props: any) {
  const langContextValue = useContext(LangContext)
  const { selectType } = props
  const { updateBeforeLang, updateAfterLang } = langContextValue

  const setLangContextValue = (e: any, selectType: SelectType) => {
    if (selectType === 'before') updateBeforeLang(e)
    if (selectType === 'after') updateAfterLang(e)
  }

  return (
    <>
      <label htmlFor='default' className='mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white'></label>
      <select
        onChange={(e) => setLangContextValue(e, selectType)}
        id={selectType}
        className={
          'mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        }
      >
        <option>Choose a Language</option>
        <option value='JavaScript'>JavaScript</option>
        <option value='TypeScript'>Typescript</option>
        <option value='ruby'>Ruby</option>
        <option value='python'>Python</option>
        <option value='haskwell'>Haskwell</option>
        <option value='java'>Java</option>
      </select>
    </>
  )
}
