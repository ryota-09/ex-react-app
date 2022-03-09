//クリックでイベントをひろう
import { useState } from "react";

export const Ex70 = () => {
  const [text, setText] = useState<string>("");
  const onClick = ():void => {
    setText("鈴木太郎");
  }

  return (
    <div className="ex70">
      <h2>EX70</h2>
      <button type="button" onClick={onClick}>名前を表示</button>
      <p>{text}</p>
    </div>
  );
};
