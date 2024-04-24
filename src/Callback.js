import React, { useCallback, useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Callback = () => {
    // console.log("parent")

const [num,setnum]=useState(0)
const [data,setdata]=useState([])


const increment=useCallback(()=>{
    setnum(num+1)
},[num])



const data_func=useCallback(()=>{
setdata([...data, "new entry"])
},[data])



  return (
    <div style={{textAlign:"center"}}>
    <h1>useCallback</h1>
      <Child1 data={data} data_func={data_func} />
      <Child2 num={num} increment={increment} />
    </div>
  )
}

export default Callback
