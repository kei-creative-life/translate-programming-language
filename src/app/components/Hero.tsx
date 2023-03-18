import { IconContext } from 'react-icons'
import { SiJavascript, SiRuby, SiPython, SiPhp } from 'react-icons/si'

export function Hero() {
  return (
    <section className='bg-gray-200 pb-20 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
          What is <span className='text-blue-600'>Cheat Programming</span>?
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48'>
          Paste or write your programming code below, and you’ll get translated programming code what you want within seconds using Chat GPT.
        </p>
        <div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16'>
          <a
            href='#'
            className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg py-3 px-5 text-center text-base font-medium text-white focus:ring-4'
          >
            Learn more
            <svg className='ml-2 -mr-1 h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </a>
          <a
            href='#'
            className='inline-flex items-center justify-center rounded-lg border border-gray-300 py-3 px-5 text-center text-base font-medium text-gray-900 focus:ring-4 focus:ring-gray-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-700'
          >
            <svg className='mr-2 -ml-1 h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
            </svg>
            Try it out
          </a>
        </div>
        <div className='mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36'>
          <span className='font-semibold uppercase text-gray-400'>SUPPORT LANGUAGES</span>
          <div className='mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between'>
            <div className='mr-5 mb-5 flex hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0'>
              <IconContext.Provider value={{ color: 'black', size: '45px' }}>
                <SiRuby />
              </IconContext.Provider>
              {/* <span className='ml-4 hidden md:block  md:text-3xl lg:text-4xl'>Ruby</span> */}
            </div>
            <div className='mr-5 mb-5 flex hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0'>
              <IconContext.Provider value={{ color: 'black', size: '45px' }}>
                <SiJavascript />
              </IconContext.Provider>
              {/* <span className='ml-4 hidden md:block md:text-3xl lg:text-4xl'>JavaScript</span> */}
            </div>
            <div className='mr-5 mb-5 flex hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0'>
              <IconContext.Provider value={{ color: 'black', size: '45px' }}>
                <SiPython />
              </IconContext.Provider>
              {/* <span className='ml-4 hidden md:block md:text-3xl lg:text-4xl'>Python</span> */}
            </div>
            <div className='mr-5 mb-5 flex hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0'>
              <IconContext.Provider value={{ color: 'black', size: '45px' }}>
                <SiPhp />
              </IconContext.Provider>
              {/* <span className='ml-4 hidden md:block md:text-3xl lg:text-4xl'>Php</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
