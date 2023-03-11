interface TutorialProps {
  prompt: string
  isStartTranslate: boolean
}

export default function Tutorial(props: TutorialProps) {
  const { prompt, isStartTranslate } = props
  const tutorialTitle = 'What is "Cheat Programming?"'
  return (
    <div className='mt-4 mb-2 md:m-6'>
      <p className='mb-4 rounded p-4 text-center font-bold md:text-xl lg:text-2xl'>{tutorialTitle}</p>
      <p className=':text-xl mb:mb-12 mx-auto mb-0 w-3/4'>
        Paste or write your programming code below, and you’ll get translated programming code what you want within seconds using Chat GPT.
      </p>
    </div>
  )
}
