import { FC } from "react"

//関数の渡され方は忘れやすい。
type Props = {
  countUp: () => void
}

export const Button :FC<Props>= (props) => {
  const { countUp } = props
  return (
    <div className="button">
      <button type="button" onClick={countUp}>Count UP</button>  
    </div>
  )
}
