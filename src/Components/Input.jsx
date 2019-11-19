import React from "react";

  const value = 0;

function Input() {
  function findPic(e) {
    e.preventDefault();
    console.log('click');
  }
  return (
    <>
      <input type="text" value={value}/>
      <button type="submit" onClick={findPic}>submit</button> 
    </>
  );
}

export default Input;
