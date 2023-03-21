interface OverlayProps {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  promptError: string
}

export default function Overlay(props: OverlayProps) {
  const { isLoading, promptError, setIsLoading } = props
  return (
    <div
      className={`${isLoading || 'hidden'} fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-90`}
    >
      <div className={`${promptError && 'hidden'} m-4 flex justify-center`}>
        <div className='h-2 w-2 animate-ping rounded-full bg-white'></div>
        <div className='mx-4 h-2 w-2 animate-ping rounded-full bg-white'></div>
        <div className='h-2 w-2 animate-ping rounded-full bg-white'></div>
      </div>
      <div className={`${promptError || 'hidden'} mb-4 text-2xl md:text-4xl`}>🥹</div>
      <h2 className={`${promptError && 'hidden'} mb-5 text-center text-base font-semibold text-white md:text-2xl`}>Translating Your Code...</h2>
      <h2 className={`${promptError || 'hidden'} mb-5 text-center text-base font-semibold text-white md:text-2xl`}>
        Sorry, Failed to translate.<br></br>Please wait a few minutes before you try again.
      </h2>
      <p className={`${promptError && 'hidden'} text-center text-white md:text-lg`}>
        This may take a few seconds,
        <br />
        please do not close this page.
      </p>
      <button
        className={`${promptError || 'hidden'} rounded-lg bg-blue-600 py-2 px-8 text-lg font-semibold dark:bg-blue-900`}
        onClick={() => setIsLoading(false)}
      >
        Close
      </button>
    </div>
  )
}
