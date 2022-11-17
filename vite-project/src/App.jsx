import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState()

useEffect(() => {
  fetch('http://localhost:5000/Albums').then(response => response.json()).then(res => setData(res));
}, [])

useEffect(() => {
console.log(data);
}, [data])

return(
<div className="App">
  {
 data !== undefined ? data.data.map(item => {
 return ( <li key={item.Title}>
{item.Title}
{item.Artist}
{item.Genre}
  </li>
   )
 }) : null
  }
</div>
  )}

export default App