import React, { useEffect, useState } from 'react'

const Debouncing = () => {

    const [input, setinput]=useState("") 

    useEffect(()=>{
        const debounced_data=setTimeout(()=>{
            console.log(input)
        }, 2000)

        return ()=>clearTimeout(debounced_data)
    },[input])

  return (
    <div style={{textAlign:"center"}}>
      <h1>Debouncing</h1>
      <p>Name: {input}</p>
      <input type="text" onChange={(e)=>setinput(e.target.value)} placeholder='enter your name' />
    </div>
  )
}

export default Debouncing
