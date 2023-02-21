import React, { useState } from 'react';


export default function Abc() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: 'Dat',
    email: 'tiendat.com',
  })
  const HandleClick = () => {
    // setCount(count + 1);
    setCount((prevState) => {
      return prevState + 1;
    });

    setUser({
      name: 'Minh',
      email: 'minh.com',
    })
    // console.log(count);
  }


  return (
    <div>

      <p>You click: {count}</p>
      <p>{JSON.stringify(user)}</p>
      <br />
      <button onClick={HandleClick} style={{ padding: '10px 20px' }}>OK</button>

    </div >
  );
}
