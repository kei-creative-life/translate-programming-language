import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className='border-gray-900 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <div className='text-md mx-4 md:text-xl lg:text-2xl'>🥴</div>
            <span className='text-md self-center whitespace-nowrap font-semibold dark:text-white md:text-2xl lg:text-3xl'>Cheat Programming</span>
          </Link>
          <div className='flex items-center justify-between'>
            <a className='mr-2 text-white' href='https://github.com/kei-creative-life'>
              <span className='mr-2 text-2xl'>🧑‍💻</span>
              <span>Profile</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
