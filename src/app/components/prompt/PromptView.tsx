import { useDispatch, useSelector } from 'react-redux'
import { inputLang, setInputLanguageReducer } from '@/app/redux/features/LanguageSlice'
import { getPrompt, updatePromptReducer, clearPromptReducer } from '@/app/redux/features/PromptSlice'
import { LangType } from '@/app/types/app'

interface PromptViewProps {
  onSubmitClicked: () => Promise<void>
  isLoading: boolean
}

export default function PromptView(props: PromptViewProps) {
  const dispatch = useDispatch()

  // Handle Input Language
  const inputLanguage = useSelector(inputLang)
  const setInputLanguage = (inputLangValue: LangType): void => {
    dispatch(setInputLanguageReducer(inputLangValue))
  }

  const langOptions = ['Ruby', 'JavaScript', 'Python', 'Php']

  // Handle Prompt
  const prompt = useSelector(getPrompt)
  const updatePrompt = (value: string) => {
    dispatch(updatePromptReducer(value))
  }
  const clearPrompt = () => {
    dispatch(clearPromptReducer())
  }
  const { onSubmitClicked } = props

  // Handle Placeholder
  const placeHolders = {
    Ruby: 'if num % 3 == 0 && num % 5 == 0\n    puts ”FizzBuzz”\n  elsif num % 3 == 0\n    puts ”Fizz”\n  elsif num % 5 == 0\n    puts ”Buzz”\n  else \n    puts num\nend',
    Python:
      'for i in range(1, 101):\n  if i % 3 == 0 and i % 5 == 0:\n    print("FizzBuzz")\n  elif i % 3 == 0:\n    print("Fizz")\n  elif i % 5 == 0:\n    print("Buzz")\n  else:\n    print(i)',
    JavaScript:
      'for( let i = 1; i <= 100; i ++ ) {\n  if( i % 15 === 0 ) {\n    console.log( "FizzBuzz" );\n  } else if ( i % 5 === 0 ) {\n    console.log( "Buzz" );\n  } else if ( i % 3 === 0 ) {\n    console.log( "Fizz" );\n  } else {\n    console.log( i );\n  }\n}',
    Php: "<?php\ndeclare(strict_types=1);\n \nfor ($i = 1; $i <= 100; $i++) {\n    if ($i % 15 === 0) {\n      echo 'FizzBuzz';\n    } elseif ($i % 3 === 0) {\n      echo 'Fizz';\n    } elseif ($i % 5 === 0) {\n      echo 'Buzz';\n    } else {\n      echo $i;\n    }\n   echo PHP_EOL;\n}",
  }

  const generatePlaceholder = () => {
    if (!inputLanguage) return 'Ruby'
    return placeHolders[inputLanguage]
  }

  return (
    <div className='mb-8 w-full md:mb-0 md:w-1/2'>
      <div className='mb-4 pr-4'>
        <div className='mb-4'>
          <label htmlFor='input' className='mb-2 block text-xl font-medium text-gray-900 dark:text-white'>
            Translate from{' '}
          </label>
          <select
            id='input'
            onChange={(e) => setInputLanguage(e.target.value as LangType)}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          >
            {langOptions.map((langOption) => (
              <option key={langOption} value={langOption}>
                {langOption}
              </option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        onChange={(event) => updatePrompt(event.target.value)}
        value={prompt}
        placeholder={generatePlaceholder()}
        maxLength={2000}
        style={{ fontFamily: '"Consolas,Monaco","Andale Mono","monospace"' }}
        className='resize-vertical scrollbar-track-gray-white scrollbar-rounded-lg h-96 w-full overflow-y-auto rounded-l-lg border bg-white p-4 text-lg text-gray-600 scrollbar scrollbar-thumb-white focus:outline-0 dark:border-gray-600 dark:bg-gray-900 md:text-lg'
      ></textarea>
      <button className='mr-4 rounded bg-blue-600 px-4 dark:bg-blue-900' onClick={onSubmitClicked}>
        Translate
      </button>
      <button className='mr-4 rounded bg-red-600 px-4 dark:bg-red-900' onClick={clearPrompt}>
        Clear
      </button>
    </div>
  )
}
