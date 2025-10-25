import { useState } from "react";
import "./App.css";

function App() {

  const colors=JSON.parse( localStorage.getItem("color"))
  const [r, SetR] = useState(colors && colors.r?colors.r:0);
  const [g, SetG] = useState(colors && colors.g?colors.r:0);
  const [b, SetB] = useState(colors && colors.b?colors.r:0);

  const Save = () => {
    console.log("save");
    localStorage.setItem("color",JSON.stringify({r,g,b}))
  };

  return (
    <>
      <h1>Color Mixer</h1>
      <div
        style={{
          backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
          height: 200,
          width: 200,
        }}
      ></div>
      <label htmlFor="">Red</label>
      <input
        onChange={(event) => SetR(event.target.value)}
        type="range"
        value={r}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">Green</label>
      <input
        onChange={(event) => SetG(event.target.value)}
        value={g}
        type="range"
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">Black</label>
      <input
        onChange={(event) => SetB(event.target.value)}
        value={b}
        type="range"
        min={0}
        max={255}
      />
      <br />
      <br />
      <button onClick={Save}>Save Color</button>
    </>
  );
}

export default App;
