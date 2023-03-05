interface IsLoadingProps {
  isLoading: boolean
}

export default function Loading({ isLoading }: IsLoadingProps) {
  return (
    <button
      style={{ display: isLoading ? '' : 'none' }}
      className='mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800'
    >
      <div>Translating Your Code</div>
      <div className='m-4 flex justify-center'>
        <div className='h-2 w-2 animate-ping rounded-full bg-blue-600'></div>
        <div className='mx-4 h-2 w-2 animate-ping rounded-full bg-blue-600'></div>
        <div className='h-2 w-2 animate-ping rounded-full bg-blue-600'></div>
      </div>
    </button>
  )
}
