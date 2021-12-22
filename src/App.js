import React, { useState } from 'react';
import './App.css';

function App () {
  const [string,setString]=useState({field : ''})

  const onChange = (e) => {
    setString({...string, field : e.target.value})
  }
  return (
    <div className="container">
      <textarea rows="3" onChange={onChange} ></textarea>
      <div className="counter">{string.field.length}</div>
    </div>
  );
}

export default App;
