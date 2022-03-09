import { Ex01Practice } from "./subComponents/Ex01Practice";

export const Ex31 = () => {
  const pushFrag = true;

  return (
    <div className="ex31">
      <h2>Ex31</h2>
      <button type="button" disabled={!pushFrag}>押せるボタン</button>
      <button type="button" disabled={pushFrag}>押せないボタン</button>
      {/* checkedはchangeハンドラーのようなイベント処理がないとつけられない。 */}
      <input type="radio" name="radio" /><span>ラジオボタン</span>
      <input type="radio" name="radio"/><span>ラジオボタン</span>
      <hr />
      <Ex01Practice />
    </div>
  )
}
