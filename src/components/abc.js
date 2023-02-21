import React, { useState } from 'react';


export default function Abc() {
  const [count, setCount] = useState(0);
  const HandleClick = () => {
    setCount(count + 1);
    // console.log(count);
  }


  return (
    <div>

      <p>You click: {count}</p>
      <br />
      <button onClick={HandleClick} style={{ padding: '10px 20px' }}>OK</button>

    </div >
  );
}
