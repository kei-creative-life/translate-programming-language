import { useDispatch, useSelector } from 'react-redux'
import { inputLang, setInputLanguageReducer } from '@/app/redux/features/LanguageSlice'
import { getPrompt, updatePromptReducer, clearPromptReducer } from '@/app/redux/features/PromptSlice'
import { LangType } from '@/app/types/app'
import SelectBox from '@/app/components/forms/SelectBox'
import Button from '@/app/components/forms/Button'
import Label from '../forms/Label'

interface PromptViewProps {
  onSubmitClicked: () => Promise<void>
  isLoading: boolean
}

export default function PromptView(props: PromptViewProps) {
  const dispatch = useDispatch()

  // Handle Input Language
  const langOptions = ['Ruby', 'JavaScript', 'Python', 'Php']
  const inputLanguage = useSelector(inputLang)
  const setInputLanguage = (langType: LangType): void => {
    dispatch(setInputLanguageReducer(langType))
  }

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
          <Label text='Translate from' />
          <SelectBox defaultValue='Ruby' id='input' options={langOptions} onChange={(e) => setInputLanguage(e.target.value as LangType)} />
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
      <Button bgColor='bg-sub-blue dark:bg-blue-900' text='Translate' onClick={onSubmitClicked} />
      <Button bgColor='bg-red-600 dark:bg-red-900' text='Clear' onClick={clearPrompt} />
    </div>
  )
}
