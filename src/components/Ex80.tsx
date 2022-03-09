//Vueでいうv-modelの表現
import { Ex80Practice } from "./subComponents/Ex80Practice";
import { ChangeEvent, useState } from "react";

export const Ex80 = () => {
  const [text, setText] = useState<string>("");
  const onChangeText = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  }
  return (
    <div className="ex80">
      <h2>EX80</h2>
      {/* valueを必ず設定する。onChangeイベントにメソッドを当てる。 */}
      <input type="text" value={text} onChange={onChangeText} />
      <div>input内の文字が反映: {text}</div>
      <hr />
      <Ex80Practice />
    </div>
  );
};
