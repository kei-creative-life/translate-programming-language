import { useState, useContext } from 'react'
import { SelectLangContext } from '../../contexts'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { MdDoubleArrow } from 'react-icons/md'

export function TranslateOptions() {
  const selectLangContextValue = useContext(SelectLangContext)
  const { updateInput, updateOutput } = selectLangContextValue

  const options = [
    {
      label: 'Ruby_Python',
      inputLang: 'ruby',
      outputLang: 'python',
      annotation: 'Ruby into Python.',
    },
    {
      label: 'Php_Ruby',
      inputLang: 'php',
      outputLang: 'ruby',
      annotation: 'Php into Ruby.',
    },
    {
      label: 'JavaScript_Ruby',
      inputLang: 'javascript',
      outputLang: 'ruby',
      annotation: 'JavaScript into Ruby.',
    },
    {
      label: 'Php_Python',
      inputLang: 'php',
      outputLang: 'python',
      annotation: 'Php into Python.',
    },
    {
      label: 'Python_Ruby',
      inputLang: 'python',
      outputLang: 'ruby',
      annotation: 'Python into Ruby.',
    },
    {
      label: 'Ruby_Php',
      inputLang: 'ruby',
      outputLang: 'php',
      annotation: 'Ruby into Php.',
    },
  ]

  const [selected, setSelected] = useState('JavaScript_TypeScript')
  const changeValue = (event: any) => {
    setSelected(event.target.value)
    setInputOutputLang(event.target.value)
  }

  const setInputOutputLang = (lang: any) => {
    const langArray = lang.split('_')
    const [inputLang, outputLang] = langArray
    updateInput(inputLang)
    updateOutput(outputLang)
  }

  return (
    <div className='mb-12'>
      <p className='py-4 text-center text-2xl font-bold text-gray-900'>Let's try it out.</p>
      <ul className='grid w-full gap-6 md:grid-cols-3'>
        {options.map((option) => (
          <li key={option.label}>
            <input
              type='radio'
              id={option.label}
              value={option.label}
              checked={option.label === selected}
              className='peer hidden'
              onChange={(e) => changeValue(e)}
            />
            <label
              htmlFor={option.label}
              className='inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-5 text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-gray-600 hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:peer-checked:border-blue-900 dark:peer-checked:bg-blue-900 dark:peer-checked:text-gray-300 dark:hover:text-gray-300'
            >
              <div className='block'>
                <div className='mb-2 flex items-center'>
                  <Image priority src={`/${option.inputLang}.svg`} height={40} width={40} alt='Input Language Icon' />
                  <IconContext.Provider value={{ color: `${option.label === selected ? 'white' : 'black'}`, size: '40px', className: 'mx-8' }}>
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <Image priority src={`/${option.outputLang}.svg`} height={40} width={40} alt='Output Language Icon' />
                </div>
                <div className={`${option.label === selected && 'text-white'} w-full text-center text-lg font-semibold text-gray-900 dark:text-white`}>
                  {option.annotation}
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
