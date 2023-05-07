import { LangType } from '@/app/types/app'

interface SelectBoxProps {
  defaultValue: LangType
  id: string
  options: string[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectBox = (props: SelectBoxProps) => {
  const { defaultValue, id, options, onChange } = props

  return (
    <>
      <select
        defaultValue={defaultValue}
        id={id}
        onChange={(e) => onChange(e)}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        {options.map((option: any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default SelectBox
