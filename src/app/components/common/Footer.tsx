export default function Footer() {
  return (
    <footer className='sticky bottom-0 bg-white dark:bg-gray-800' id='try'>
      <div className='mx-auto max-w-7xl overflow-hidden py-2 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center space-x-6'>
          <a className='text-gray-400 hover:text-gray-500' href='https://github.com/kei-creative-life' target='_top' rel='noopener nofollow noreferrer'>
            <span className='sr-only'>GitHub</span>
          </a>
        </div>
        <p className='mt-2 text-center text-sm text-gray-800 dark:text-gray-300 md:text-base'>© 2023 Cheat Programming</p>
        {/* <p className='mt-2 text-center text-sm text-gray-800 dark:text-gray-300 md:text-base'>Made by Kengo Yamamoto</p> */}
      </div>
    </footer>
  )
}
