//Propsで子コンポーネントで引数を渡す
import { CompMyname } from "./CompMyname"

export const Ex190 = () => {
  const name = "ジョニー";
  return (
    <div className="ex190">
      <h2>EX190</h2>
      <div>子コンポーネントにnameを渡します。</div>
      <CompMyname name={name}/>
    </div>
  );
};
