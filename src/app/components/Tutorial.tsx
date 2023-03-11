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

  const tutorialTitle = 'What is "Cheat Programming?"'
  const tutorialTexts = [
    'Select detected programming language on "Translate from" form below.',
    'Select programming language on "Translate into" below.',
    'Write programming language on "Before code" below.',
    'Press',
  ]

  const tutorialText = tutorialTexts.map((text, index) => (
    <li className='mb-4' key={index}>
      <div className='flex items-center'>
        <div className='mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-900 md:h-6 md:w-6'>
          <div
            className={`${
              !(
                (index === 0 && beforeLang && beforeLang !== 'Choose a Language') ||
                (index === 1 && afterLang && afterLang !== 'Choose a Language') ||
                (index === 2 && prompt) ||
                (index === 3 && isStartTranslate)
              ) && 'hidden'
            }`}
          >
            <svg aria-hidden='true' className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
          <div
            className={`${
              ((index === 0 && beforeLang && beforeLang !== 'Choose a Language') ||
                (index === 1 && afterLang && afterLang !== 'Choose a Language') ||
                (index === 2 && prompt) ||
                (index === 3 && isStartTranslate)) &&
              'hidden'
            }`}
          >
            <svg aria-hidden='true' className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
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
            ((index === 0 && beforeLang && beforeLang !== 'Choose a Language') ||
              (index === 1 && afterLang && afterLang !== 'Choose a Language') ||
              (index === 2 && prompt) ||
              (index === 3 && isStartTranslate)) &&
            'text-blue-600'
          } flex content-center`}
        >
          <span>
            Step {index + 1}. {text}
          </span>
          <div className={`${index === 3 || 'hidden'} flex content-center`}>
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
    <div className='m-4 md:m-6'>
      <p className='mb-4 rounded p-4 text-center font-bold md:text-xl lg:text-2xl'>{tutorialTitle}</p>
      <p className=':text-xl mb:mb-12 mx-auto mb-6 w-3/4'>
        Paste or write your programming code below, and you’ll get translated programming code what you want within seconds using Chat GPT.
      </p>
      {/* <ul className='text-md my-4 md:m-4 md:text-lg'>{tutorialText}</ul> */}
    </div>
  )
}
