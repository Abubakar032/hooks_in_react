import React, { useRef, useState, useEffect } from 'react';

const MyComponent = () => {
  const myInputRef = useRef(null);

  const [inputValue, setInputValue] = useState('');


  const handleInputChange = () => {
    setInputValue(myInputRef.current.value);
  };

  return (
    <div style={{textAlign:"center"}}>
    <h1>useRef</h1>
    
    <p>Input value: {inputValue}</p>
    
      <label htmlFor="myInput">Type here: </label>
      <input
        type="text"
        id="myInput"
        ref={myInputRef}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MyComponent;
