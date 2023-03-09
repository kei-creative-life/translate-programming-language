import { useContext } from 'react'
import { BsTranslate } from 'react-icons/bs'
import { LangContext } from '../contexts'

interface TutorialProps {
  prompt: string
  isStartTranslate: boolean
}

export default function Tutorial(props: TutorialProps) {
  const { prompt, isStartTranslate } = props
  const { beforeLang, afterLang } = useContext(LangContext)

  const tutorialTitle = 'You can translate from one programming language to another target languages on this web site.'
  const tutorialTexts = [
    'Select detected programming language on "Translate from" form below.',
    'Select programming language on "Translate into" below.',
    'Write programming language on "Before code" below..',
    'Press',
  ]

  const tutorialText = tutorialTexts.map((text, index) => (
    <li className='mb-2' key={index}>
      <div className='flex items-center'>
        <div className='mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-900 '>
          <div
            style={{
              display: (index === 0 && beforeLang) || (index === 1 && afterLang) || (index === 2 && prompt) || (index === 3 && isStartTranslate) ? '' : 'none',
            }}
          >
            <svg
              aria-hidden='true'
              className='h-4 w-4 text-blue-100 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
          <div
            style={{
              display: (index === 0 && beforeLang) || (index === 1 && afterLang) || (index === 2 && prompt) || (index === 3 && isStartTranslate) ? 'none' : '',
            }}
          >
            <svg
              aria-hidden='true'
              className='h-3 w-3 text-gray-800 dark:text-gray-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`${
            ((index === 0 && beforeLang) || (index === 1 && afterLang) || (index === 2 && prompt) || (index === 3 && isStartTranslate)) && 'text-blue-600'
          } flex content-center`}
        >
          <span>
            Step {index + 1}. {text}
          </span>
          <div className={`${index !== 3 && 'invisible'} flex content-center`}>
            <span className='mx-2'>
              <BsTranslate />
            </span>
            <span>button.</span>
          </div>
        </div>
      </div>
    </li>
  ))

  return (
    <div className='m-6 w-full'>
      <p className='md:text-xl lg:text-2xl'>{tutorialTitle}</p>
      <ul className='m-4 md:text-lg'>{tutorialText}</ul>
    </div>
  )
}
