import React, { ChangeEvent, useMemo, useState } from "react";

const UseMemo = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  let resultB = 1;

  let resultA = useMemo(()=>{
    let tempResult = 1;
    for (let i = 1; i <= A; i++) {
        let fake = 0;
        while(fake<10000000){
            fake++
            const fakeValue = Math.random()
        }
        tempResult *= i; 
    }
    return tempResult
  },[A])

  for (let i = 1; i <= B; i++) {
    resultB *= i;
  }

  return (
    <div>
      useMemo
      <input
        type="text"
        value={A}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setA(+e.currentTarget.value);
        }}
      />
      <input
        type="text"
        value={B}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setB(+e.currentTarget.value);
        }}
      />

      <div>Result for A = {resultA}</div>
      <div>Result for B = {resultB}</div>
    </div>
  );
};

  
  const UsersSecret = (props: { users: Array<string> }) => {
      console.log('users secret render');
      
    return (
      <div>
        {props.users.map((u, i) => (
          <div key={i}>{u}</div>
        ))}
      </div>
    );
  };
  
  export const Userslol = React.memo(UsersSecret)
  
  export const ReactMemoHelper = () => {
      console.log('reactMemoHlper');
      
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["alesha", "volodia", "egor"]);
        return (
      <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Userslol users={users} />
      </>
    );
  };

export default UseMemo;
