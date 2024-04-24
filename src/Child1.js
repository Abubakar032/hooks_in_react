import React, { memo } from 'react'

const Child1 = ({data,data_func}) => {

    console.log("Child1")

  return (
    <div>
    {
        data.map((currentItem,index)=>{
            return <p key={index}>{currentItem+index}</p>
        })
    }
    <button onClick={data_func}>Add todos</button>
      
    </div>
  )
}

export default memo (Child1)
