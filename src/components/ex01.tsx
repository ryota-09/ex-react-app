import { Ex01Practice } from "./subComponents/Ex01Practice";

export const Ex01 = () => {
  const name = "山田";
  const age = 20;
  const birthDate = new Date(2000, 12, 24);
  const hobbies = ["スイム", "バイク", "ラン"];
  const after10yearsAge = age + 10;

  return (
    <div className="ex01">
      <h2>Ex01</h2>
      <p>名前: { name }</p>
      <p>年齢: { age }</p>
      {/* オブジェクト型は直接入れることができない。 */}
      <p>誕生日: { `${birthDate}` }</p>
      <p>趣味: { hobbies.map((hobby) => (
        <span key={hobby}>{hobby}&nbsp;</span>
      )) }</p>
      <p>10年後の年齢: { after10yearsAge }</p>
      <hr />
      <Ex01Practice />
    </div>
  );
};
