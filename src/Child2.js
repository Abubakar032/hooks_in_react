import React, { memo } from 'react'

const Child2 = ({num, increment}) => {
    console.log("Child2")
  return (
    <div>

    <h1>  <button onClick={increment}>increment</button>{num}</h1>
    </div>
  )
}

export default memo(Child2)
