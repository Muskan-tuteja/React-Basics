import React, { useState } from 'react'

const Checkbox = () => {
  const [check,setCheck]=useState([])
  return (
    <div>
      <h2>Select checkbox in react</h2>
      <input type="checkbox" id='php' value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <input type="checkbox" id='js' value="js" />
      <label htmlFor="js">JS</label>
      <br />
      <input type="checkbox" id='phy' value="phy" />
      <label htmlFor="phy">Python</label>

      <h1>{check}</h1>
      
    </div>
  )
}

export default Checkbox
