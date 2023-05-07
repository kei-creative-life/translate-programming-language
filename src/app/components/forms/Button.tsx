interface ButtonProps {
  bgColor: string
  textColor?: string
  width?: string
  disabled?: boolean
  text: string
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  const { bgColor, text, onClick } = props
  return (
    <>
      <button className={`${bgColor} mr-4 rounded px-4 font-main`} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button
