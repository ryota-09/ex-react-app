import { Ex215Practice } from "./subComponents/Ex215Practice";
import { useState } from "react";
import { Button } from "./CompButton"

//子から親コンポーネントにイベントを渡す
export const Ex215 = () => {
  const [count, setCount] = useState<number>(0);
  //ここに引数があったとしても、子のコンポーネントから渡すことができる。
  const countUp = ():void => {
    setCount((prev) => (prev + 1));
  }
  return (
    <div className="es215">
      <h2>EX215</h2>
      <p>子コンポーネントから親コンポーネントにイベントアップします。</p>
      <div>現在のカウント: {count}</div>
      {/* プロパティ名は発生させるイベント。子に関数ごと渡してしまう。 */}
      <Button countUp={countUp} />
      <Button countUp={countUp} />
      <Button countUp={countUp} />
      <Button countUp={countUp} />
      <hr />
      <Ex215Practice />
    </div>
  );
};
