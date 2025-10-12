import styl from './css/count.module.css'

import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <>
      <h1>Counter : {number}</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter your number"
      />
      <br />
      <br />
      <button  className={styl.buy} onClick={() => setNumber(number + 1)}>inc</button>
      <button style={{background:"red"}} className={styl.buy} onClick={() => setNumber(number - 1)}>dec</button>
      <button style={{background:"blueviolet"}} className={styl.buy} onClick={() => setNumber(number * 2)}>*</button>
      <button style={{background:"chocolate"}}className={styl.buy} onClick={() => setNumber(number / 2)}>div</button>
      <button style={{background:"blue"}} className={styl.buy} onClick={() => setNumber(number + input)}>Add</button>
<br />
        <button className={styl.res}  style={{color:"black"}}onClick={() => setNumber(0)}>Reset</button>
    </>
  );
};
export default Counter;
