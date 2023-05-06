import Image from 'next/image'
import { Link as Scroll } from 'react-scroll'

export function Hero() {
  const languages = ['ruby', 'javascript', 'python', 'php']

  return (
    <section className='bg-main-blue pb-20 md:mb-20'>
      <div className='mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100  dark:text-white md:text-5xl lg:text-6xl'>
          What is <span className='text-blue-600 '>Cheat Programming</span>?
        </h1>
        <p className='mb-8 font-main text-lg font-normal text-gray-100 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48'>
          Paste or write your programming code below, and you’ll get translated programming code what you want within seconds using Chat GPT.
        </p>
        <div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16'>
          <span className='inline-flex items-center justify-center rounded-lg border border-white bg-sub-blue py-3 px-5 text-center font-main text-base font-medium text-white focus:ring-4 focus:ring-gray-100 hover:bg-blue-500 dark:border-gray-700 dark:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-700'>
            <Scroll to='try' smooth={true}>
              Try it out
            </Scroll>
          </span>
        </div>
        <div className='mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36'>
          <span className='font-main font-semibold uppercase text-gray-100'>SUPPORT LANGUAGES</span>
          <div className='mx-auto mt-8 flex w-3/4 flex-wrap items-center text-gray-500 sm:justify-between'>
            {languages.map((language) => (
              <div className='mr-5 mb-5 flex hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0' key={language}>
                <Image priority src={`/${language}.svg`} height={60} width={60} alt='Input Language Icon' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
