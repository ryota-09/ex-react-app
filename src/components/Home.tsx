import { HomePractice } from "./subComponents/HomePractice";

export const Home = () => {
  return (
    <div>
      <h2>ここはHomeコンポーネントページです。</h2>
      <p>{"<hr />"}で区切った部分より下の部分に、subComponentsフォルダに入ったコンポーネントに書いたコードが反映されます。</p>
      <p>componentsフォルダ直下のtsxファイルが問題の答えになります。</p>
      <hr />
      <HomePractice />
    </div>
  )
}
