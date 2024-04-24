import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [num,setnum]=useState(0)
    const [data, setdata]=useState([])

    const increment=()=>{
        setnum(num+1)
    }

    const  data_func=()=>{
        setdata([...data,"new entry"])
    }

    const increment_memo=(num)=>{
        console.log("increment_num")
        for(let i=0; i<1000000000; i++){
                 num =num+1;
        }
        return num;
    }

    const result=useMemo(()=>{
         return increment_memo(num)
    },[num])
     
  return (
    <div style={{textAlign:"center"}}>
    <h1>useMemo</h1>
    {
        data.map((currentItem, index)=>{
            return <p key={index}>{currentItem+index}</p>
        })
    }
      <button onClick={data_func}>Add todos</button>
      <br /><br />
      <button onClick={increment}>increment</button>{result}
    </div>
  )
}

export default  Memo
