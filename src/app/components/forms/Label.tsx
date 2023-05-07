import { memo } from 'react'

interface LabelProps {
  text: string
}

const Label = (props: LabelProps) => {
  const { text } = props

  return (
    <>
      <label htmlFor='input' className='mb-2 block font-main text-xl font-medium text-gray-900 dark:text-white'>
        {text}
      </label>
    </>
  )
}

export default memo(Label)
