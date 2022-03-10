//表示についての問題
import { useState } from "react";
import { Exbeginner02Practice } from "./subComponents/Exbeginner02Practice";

export const Exbeginner02 = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobbies, setHobbies] = useState<Array<string>>([]);
  const [url, setUrl] = useState<string>("");

  const onClickButton = () => {
    setName("山田たろう");
    setAge(34);
    setHobbies(["スイム", "バイク", "ラン"]);
    setUrl("https://www.rakus-partners.co.jp/");
  };

  return (
    <div className="exbeginner01">
      <h2>EX-beginner02</h2>
      <p>ボタンを押すと情報が表示される。</p>
      <p>名前: {name}</p>
      <p>年齢: {age}</p>
      <p>10年後の年齢: {age + 10}</p>
      <span>趣味: </span>
      {hobbies.map((hobby) => (
        <span key={hobby}> {hobby} </span>
      ))}
      <br />
      <a href={url}>自社ページリンク</a>
      <br />
      <button type="button" onClick={onClickButton}>ボタン</button>
      <hr />
      <Exbeginner02Practice />
    </div>
  );
};
