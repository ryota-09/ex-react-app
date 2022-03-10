//足し算結果を表示

import { ChangeEvent, useState } from "react";

import { Exbeginner03Practice } from "./subComponents/Exbeginner03Practice";

export const Exbeginner03 = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [answer, setAnswer] = useState<number>(0);

  const onChangeNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    setNum1(event.target.value);
    let newAnswer: number = Number(num1) + Number(num2);
    setAnswer(newAnswer);
  };

  const onChangeNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    setNum2(event.target.value);
    let newAnswer: number = Number(num1) + Number(num2);
    setAnswer(newAnswer);
  };

  return (
    <div className="exbeginner03">
      <h2>EX-beginner03</h2>
      <input type="text" onChange={onChangeNumber1} value={num1} />
      <span>+</span>
      <input type="text" onChange={onChangeNumber2} value={num2} />
      <span>={answer}</span>
      <p>ここはもっと良いコードがありそうです。。。</p>
      <hr />
      <Exbeginner03Practice />
    </div>
  );
};
