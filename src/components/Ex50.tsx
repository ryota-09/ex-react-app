export const Ex50 = () => {
  const lastName = "佐藤";
  const firstName = "太郎";
  const age = 20;

  const showFullName = (): string => {
    return lastName + firstName
  };
  const showPlus10Years = (): number => {
    return age + 10;
  };
  const showPlus20Year = (targetAge: number): number => {
    return targetAge + 20
  };
  
  return (
    <div className="ex50">
      <h2>EX50</h2>
      <div>私のフルネーム: {showFullName()}</div>
      <div>現在の年齢: {age}</div>
      <div>10年後の年齢: {showPlus10Years()}</div>
      <div>20年後の年齢: {showPlus20Year(age)}</div>
    </div>
  )
}
