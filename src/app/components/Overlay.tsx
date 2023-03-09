interface IsLoadingProps {
  isLoading: boolean
}

export default function Overlay({ isLoading }: IsLoadingProps) {
  return (
    <div
      style={{ display: isLoading ? '' : 'none' }}
      className='fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-75'
    >
      <div className='m-4 flex justify-center'>
        <div className='h-2 w-2 animate-ping rounded-full bg-white'></div>
        <div className='mx-4 h-2 w-2 animate-ping rounded-full bg-white'></div>
        <div className='h-2 w-2 animate-ping rounded-full bg-white'></div>
      </div>
      <h2 className='mb-5 text-center text-xl font-semibold text-white'>Translating Your Code...</h2>
      <p className='w-1/3 text-center text-white'>
        This may take a few seconds,
        <br /> please don't close this page.
      </p>
    </div>
  )
}
