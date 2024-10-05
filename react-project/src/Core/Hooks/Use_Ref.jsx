import { useRef, useState } from "react";

export function Use_Ref() {
  // allows you to persist values between renders.
  // does not cause a re-render when updated
  const count = useRef(0);
  const [state, setState] = useState(0);

  const inputRef = useRef(null);

  return (
    <>
      <p className="m-0">useRef value : {count.current} </p>
      <button onClick={() => count.current++}>update</button>

      {/* updating state cause useRef value change in ui */}
      <p className="m-0 mt-3"> state update will cause re-render</p>
      <button onClick={() => setState(state + 1)}>force render</button>

      <br />
      {/* dom ref */}
      {/* current.value , current.focus() , etc */}
      <input className="mt-4 mx-2" type="text" ref={inputRef} />
      <button
        className="btn btn-primary"
        onClick={() => inputRef.current.focus()}
      >
        submit
      </button>
    </>
  );
}
