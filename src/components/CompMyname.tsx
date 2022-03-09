import { FC } from "react"

type Props = {
  name: string
}

export const CompMyname: FC<Props> = (props) => {
  const { name } = props;
  return (
    <p>私の名前は { name } です</p>
  )
}
