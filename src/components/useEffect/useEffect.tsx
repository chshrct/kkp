import React, { useEffect, useState } from "react";

const UseEffect = () => {
  console.log("rendered useEffect");

  const [counter, setCounter] = useState(0);
  const [fake, setFake] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  },[counter]);

  return (
    <>
      <button onClick={()=>setFake(fake+1)}>{counter}</button>
      <div>useEffect</div>
    </>
  );
};

export default UseEffect;
