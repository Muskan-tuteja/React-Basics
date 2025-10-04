import React from 'react'

const Wrapper = ({children,color}) => {
  return (
    <div style={{border:"3px solid pink"}}>
      <h1 style={{color:color}}>hello Wrapper</h1>
      <p>hi warpper basi cs</p>
      {children}
      
    </div>
  )
}

export default Wrapper
