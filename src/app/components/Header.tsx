export default function Header() {
  return (
    <header>
      <nav className='border-gray-900 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <a href='#' className='flex items-center'>
            <img src='https://flowbite.com/docs/images/logo.svg' className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' />
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Trans Programming</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
