import { useMemo, useState } from "react";

export function Use_Memo() {
  const [change, setChange] = useState(0);

  function expensive(id = 1) {
    console.log("expensive function called id : ", id);
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return sum;
  }

  //  1
  // const data = expensive();
  // without useMemo => it will execute when component render

  //  2
  const data = useMemo(expensive, []);
  // returns a memoized value until page reload

  //  3
  const data2 = useMemo(() => expensive(2), [change]);
  // returns a memoized value until dependencies change + page reload

  return (
    <>
      <p> id 1 : {data}</p>
      <p> id 2 : {data2}</p>
      <p> state data : {change}</p>

      <button
        className="btn btn-primary mx-2"
        onClick={() => setChange(change + 1)}
      >
        force render
      </button>
    </>
  );
}
