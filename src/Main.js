import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
const Main = () => {
    const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)

  useEffect(() => {
      console.log("hello")
      document.title = 'Count is: ' + count
  })

  return <div>
    <p>Để title trang web để nhận thấy thay đổi</p>
    <p>{count}</p>
    <button onClick={handleClick}>Increment Count</button>
  </div>
}
export default Main;