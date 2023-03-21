import Link from 'next/link'
// import { ToggleDarkMode } from '../ToggleDarkMode'

export default function Header() {
  return (
    <header>
      <nav className='border-gray-900 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <div className='text-md mr-4 md:text-xl lg:text-2xl'>🥴</div>
            <span className='text-md self-center whitespace-nowrap font-semibold text-gray-900 dark:text-white md:text-2xl lg:text-3xl'>Cheat Programming</span>
          </Link>
          {/* <ToggleDarkMode /> */}
        </div>
      </nav>
    </header>
  )
}
