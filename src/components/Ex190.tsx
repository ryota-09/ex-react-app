//Propsで子コンポーネントに引数を渡す
import { CompMyname } from "./CompMyname";
import { Ex190Practice } from "./subComponents/Ex190Practice";

export const Ex190 = () => {
  const name = "ジョニー";
  return (
    <div className="ex190">
      <h2>EX190</h2>
      <div>子コンポーネントにnameを渡します。</div>
      <CompMyname name={name}/>
      <hr />
      <Ex190Practice />
    </div>
  );
};
