import { useState, useContext, useRef, useCallback } from 'react'
import { LangContext } from '../../contexts'
import { useBodyScrollLock } from '@/app/utils/useBodyScrollLock'
import { LangType } from '@/app/types/app'

export default function SelectLangsWrapper() {
  const langContextValue = useContext(LangContext)
  const { updateLangType } = langContextValue

  const languages = [
    { label: 'JavaScript to\n TypeScript' },
    { label: 'JavaScript to\n Ruby' },
    { label: 'JavaScript to\n Python' },
    { label: 'JavaScript to\n PHP' },
    { label: 'Ruby to\n PHP' },
    { label: 'Ruby to\n Python' },
    { label: 'Ruby to JavaScript' },
    { label: 'Python to Ruby' },
    { label: 'Python to PHP' },
    { label: 'Python to JavaScript' },
    { label: 'PHP to\n Ruby' },
    { label: 'PHP to Python' },
    { label: 'PHP to JavaScript' },
  ]
  const [selectedLanguages, setSelectedLanguages] = useState<LangType>('Ruby')
  const [filteredLanguages, setFilteredLanguages] = useState(languages)
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const searchLanguages = (input: string) => {
    if (!input) setFilteredLanguages(languages)
    const reg = new RegExp(input, 'i')
    const filteredLanguage = languages.filter((language) => language.label.match(reg))
    setFilteredLanguages(filteredLanguage)
  }

  const languageList = filteredLanguages.map((language, index) => (
    <li key={index}>
      <input
        type='radio'
        id={`${language.label}_${index}`}
        value={language.label}
        checked={language.label === selectedLanguages}
        className='peer hidden'
        onChange={(e) => setSelectedLanguages(e.target.value as LangType)}
      />
      <label
        htmlFor={`${language.label}_${index}`}
        // eslint-disable-next-line
        className='inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-4 text-gray-800 peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:text-gray-400 dark:peer-checked:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:p-5'
      >
        <div className='block'>
          <div className='w-full text-sm font-semibold md:text-base'>{language.label}</div>
        </div>
      </label>
    </li>
  ))

  const target = useRef<HTMLDivElement>(null)

  useBodyScrollLock({
    isVisibleModal,
    target,
  })

  const handleOnDisable = useCallback(() => {
    setIsVisibleModal(true)
  }, [])

  const updateSelectedLanguage = useCallback(() => {
    updateLangType(selectedLanguages)
    setIsVisibleModal(false)
  }, [])

  return (
    <div className='flex flex-row rounded-lg md:flex-col'>
      <div className='w-full'>
        <button
          onClick={handleOnDisable}
          className='w-full rounded-lg border bg-blue-600 py-2 text-lg dark:border-blue-600 dark:bg-blue-800 dark:hover:bg-blue-800'
        >
          Choose Language
        </button>
      </div>
      <div
        className={`${
          isVisibleModal || 'hidden'
        } fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-200 p-8 dark:bg-gray-800`}
      >
        <form className='mb-6 flex w-3/4 items-center md:w-1/2'>
          <label htmlFor='simple-search' className='sr-only'>
            Search
          </label>
          <div className='relative w-full'>
            <input
              onChange={(event) => searchLanguages(event.target.value)}
              type='text'
              id='simple-search'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='Input programming language name...'
              required
            />
          </div>
          <button
            type='submit'
            className='ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700'
          >
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
            <span className='sr-only'>Search</span>
          </button>
        </form>
        <div className='mb-8 text-lg font-bold text-gray-800'>You can translate {selectedLanguages}.</div>
        <ul className='mb-8 grid w-full grid-cols-2 gap-6 overflow-y-scroll p-4 md:grid-cols-3 lg:grid-cols-4'>{languageList}</ul>
        <div>
          <button className={`mx-2 rounded-lg bg-blue-600 py-2 px-8 text-lg font-semibold hover:bg-blue-800 dark:bg-blue-600`} onClick={updateSelectedLanguage}>
            Decide Language
          </button>
        </div>
      </div>
    </div>
  )
}
