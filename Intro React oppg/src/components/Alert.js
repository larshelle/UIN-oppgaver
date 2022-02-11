import { useState } from 'react';

export default function Input() {
  const [value, inputValue] = useState('default');

  function handleChange(e) {
    inputValue(e.target.value);
    console.log('Changed');
  }

  function handleClick() {
    console.log(value);
  }
  return (
    <>
      <button className="button" onClick={handleClick}>
        Click me!
      </button>
      <input type="text" onChange={handleChange} />
      <h2>Input: {value}</h2>
    </>
  );
}
