export default function Blog() {
  return (
    <div className='mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
      <div className='space-y-10'>
        <div>
          <div className='sm:hidden'>
            <label className='sr-only'>Select a tab</label>
            <select
              id='tabs'
              name='tabs'
              className='block w-full rounded-md border-gray-700 bg-gray-700 py-2 pl-3 pr-10 text-base text-gray-300 focus:border-gray-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            >
              <option>Zenn</option>
              <option>Hatena Blog</option>
              <option>note</option>
            </select>
          </div>
          <div className='hidden sm:block'>
            <div className='border-b border-gray-700'>
              <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                <a
                  className='flex whitespace-nowrap border-b-2 border-gray-500 py-3 px-1 text-sm font-medium text-gray-300 visited:text-gray-300 hover:border-gray-400 hover:text-gray-200 visited:hover:text-gray-200'
                  href='/posts'
                >
                  panda-program
                  <span className='ml-3 hidden rounded-full bg-gray-700 py-0.5 px-2.5 text-xs font-medium text-gray-300 md:inline-block'>83</span>
                </a>
                <a
                  className='flex whitespace-nowrap border-b-2 border-transparent py-3 px-1 text-sm font-medium text-gray-400 visited:text-gray-400 hover:border-gray-600 hover:text-gray-300 visited:hover:text-gray-300'
                  href='/posts/zenn'
                >
                  Zenn<span className='ml-3 hidden rounded-full bg-gray-700 py-0.5 px-2.5 text-xs font-medium text-gray-300 md:inline-block'>8</span>
                </a>
              </nav>
            </div>
          </div>
        </div>

        <ul className='grid gap-6 md:grid-cols-2 md:gap-8'>
          <li className='group list-none rounded-lg bg-gray-800 transition duration-200 ease-in-out hover:bg-gray-700'>
            <a className='flex h-full flex-col justify-between px-6 py-4' href='/posts/the-efficient-way-to-make-slides'>
              <div className='flex items-center space-x-3'>
                <img width='16' height='16' src='/favicon/favicon.ico' alt='favicon' />
                <span className='text-sm text-gray-400 transition duration-200 ease-in-out group-hover:text-gray-300'>panda-program.com</span>
              </div>
              <h2 className='mt-10 text-2xl font-bold text-gray-200'>スライドを効率的に作る方法を考えてみた</h2>
              <div className='mt-10'>
                <div className='flex justify-between text-sm'>
                  <p className='text-gray-400 transition duration-200 ease-in-out group-hover:text-gray-300'>プログラミングをするパンダ</p>
                  <time className='tracking-wider text-gray-400' dateTime='2022-09-09T00:00:00.000Z'>
                    5ヶ月前
                  </time>
                </div>
              </div>
            </a>
          </li>
          <li className='group list-none rounded-lg bg-gray-800 transition duration-200 ease-in-out hover:bg-gray-700'>
            <a className='flex h-full flex-col justify-between px-6 py-4' href='/posts/the-efficient-way-to-make-slides'>
              <div className='flex items-center space-x-3'>
                <img width='16' height='16' src='/favicon/favicon.ico' alt='favicon' />
                <span className='text-sm text-gray-400 transition duration-200 ease-in-out group-hover:text-gray-300'>panda-program.com</span>
              </div>
              <h2 className='mt-10 text-2xl font-bold text-gray-200'>スライドを効率的に作る方法を考えてみた</h2>
              <div className='mt-10'>
                <div className='flex justify-between text-sm'>
                  <p className='text-gray-400 transition duration-200 ease-in-out group-hover:text-gray-300'>プログラミングをするパンダ</p>
                  <time className='tracking-wider text-gray-400' dateTime='2022-09-09T00:00:00.000Z'>
                    5ヶ月前
                  </time>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='mt-20'>
        <div className='flex items-center justify-between'>
          <div className='invisible'>
            <button
              className='flex items-center rounded-lg border border-gray-700 bg-gray-800 py-2 pl-5 pr-8 text-sm text-gray-300 transition duration-200 ease-in-out hover:bg-gray-700 hover:text-gray-200'
              type='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                aria-hidden='true'
                className='mr-2 h-4 w-4'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='M15 19l-7-7 7-7'></path>
              </svg>
              前へ
            </button>
          </div>
          <div className=''>
            <button
              className='flex items-center rounded-lg border border-gray-700 bg-gray-800 py-2 pl-8 pr-5 text-sm text-gray-300 transition duration-200 ease-in-out hover:bg-gray-700 hover:text-gray-200'
              type='button'
            >
              次へ
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                aria-hidden='true'
                className='ml-2 h-4 w-4'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
