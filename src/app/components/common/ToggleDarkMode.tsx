'use client'

import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { useToggleDarkMode } from '../../utils/useToggleDarkMode'

export function ToggleDarkMode() {
  const { isDarkMode, toggle } = useToggleDarkMode()

  return (
    <button onClick={() => toggle()} className='rounded-md border border-gray-400 p-2'>
      <span className='text-gray-800 dark:text-white'>
        {isDarkMode && <BsSunFill />}
        {!isDarkMode && <BsFillMoonStarsFill />}
      </span>
    </button>
  )
}
