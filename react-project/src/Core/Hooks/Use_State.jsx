import { useState } from "react";

export function Use_State() {
  // 1. [current value , function that update current value]
  // 2. initial value with data type defined useState(0)
  // 3. when state update the component will re-render
  const [count, setCount] = useState(0);

  // setState callback function provide current value
  function handleClick() {
    setCount((e) => e + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
