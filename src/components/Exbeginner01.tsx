//表示についての問題
import { Exbeginner01Practice } from "./subComponents/Exbeginner01Practice";

export const Exbeginner01 = () => {
  const name = "山田たろう";
  const age = 34;
  const hobbies = ["スイム", "バイク", "ラン"];
  const url = "https://www.rakus-partners.co.jp/";
  
  return (
    <div className="exbeginner01">
      <h2>EX-beginner01</h2>
      <p>名前: {name}</p>
      <p>年齢: {age}</p>
      <p>10年後の年齢: {age + 10}</p>
      <span>趣味: </span>
      {hobbies.map((hobby) => (
        <span key={hobby}> {hobby} </span>
        ))}<br />
      <a href={url}>自社ページリンク</a>
      <hr />
      <Exbeginner01Practice />
    </div>
  );
};
