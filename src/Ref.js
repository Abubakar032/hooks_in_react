import React, { useRef, useState } from 'react';

const Ref = () => {
  const refname = useRef('');
  const refemail = useRef('');
  const [data, setdata] = useState({
    name: "",
    email: ""
  });

  const submit = () => {
    setdata((prevData) => ({
      ...prevData,
      name: refname.current.value,
      email: refemail.current.value
    }));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useRef</h1>
      <p>Name: {data.name}</p>

      <p>Email: {data.email}</p>
      <input type="text" ref={refname} placeholder='enter your name' /><br /><br />
      <input type="text" ref={refemail} placeholder='enter your email' /><br /><br />
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default Ref;
