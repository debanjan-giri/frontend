import { useEffect, useState } from "react";

export function Use_Effect() {
    // mount ==> component added to dom tree
    // update ==> when state change component unmount then mount
    // unmount ==> component removed from dom tree
  
    // * infinite loop if
    // useEffect update setState update state cause render execute useEff
    const [data, setData] = useState(0);
  
    // no dependency
    useEffect(() => {
      console.log("execute when ( component update + page reload )");
    });
  
    // empty dependency array
    useEffect(() => {
      console.log("execute when ( page reload )");
    }, []);
  
    // dependency array
    useEffect(() => {
      console.log("execute when ( this state change + page reload )");
    }, [data]);
  
    // clean up function
    useEffect(() => {
      return () => {
        console.log("execute when ( component unmount )");
      };
    }, [data]);
  
    return (
      <>
        <button onClick={() => setData(data + 1)}>click</button>
      </>
    );
  }