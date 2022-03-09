export const Ex31 = () => {
  const pushFrag = true;

  return (
    <div className="ex31">
      <h2>Ex31</h2>
      <button type="button" disabled={!pushFrag}>押せるボタン</button>
      <button type="button" disabled={pushFrag}>押せないボタン</button>
      <hr />
      <input type="radio" name="radio" /><span>ラジオボタン</span>
      <input type="radio" name="radio"/><span>ラジオボタン</span>
    </div>
  )
}
