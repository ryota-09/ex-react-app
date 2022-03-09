//クリックしたイベントをひろう
import { Ex60Practice } from "./subComponents/Ex60Practice";
import { useState } from "react"

export const Ex60 = () => {
  const [pushFrag, setPushFrag] = useState(true);

  const clickEvent = ():void => {
    setPushFrag(!pushFrag)
  }

  return (
    <div className="ex60">
    <h2>EX60</h2>
    {/* void型のメソッドはカッコは不要 */}
    <button type="button" onClick={clickEvent} disabled={!pushFrag}>押せるボタン</button>
      <button type="button" onClick={clickEvent} disabled={pushFrag}>押せないボタン</button>
      <hr />
      <Ex60Practice />
    </div>
  )
}
