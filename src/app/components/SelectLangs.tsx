// interface SelectLangsProps {
//   setBeforeLang: React.Dispatch<React.SetStateAction<string>>
//   setAfterLang: React.Dispatch<React.SetStateAction<string>>
// }

export default function SelectLangs({ setBeforeLang, setAfterLang }: any) {
  const handleChange = (e: any) => {
    if (setBeforeLang) setBeforeLang(e.target.value)
    if (setAfterLang) setAfterLang(e.target.value)
  }

  return (
    <div>
      <label htmlFor='default' className='mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white'></label>
      <select
        onChange={(e) => handleChange(e)}
        id='default'
        className='mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        <option>Choose a Language</option>
        <option value='javascript'>JavaScript</option>
        <option value='typescript'>Typescript</option>
        <option value='ruby'>Ruby</option>
        <option value='python'>Python</option>
        <option value='haskwell'>Haskwell</option>
        <option value='java'>Java</option>
      </select>
    </div>
  )
}
