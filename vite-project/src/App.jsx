import React, { useState, useEffect } from 'react'
import Stylesheets from './Stylesheet';

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
  <Stylesheets />
  {
 data !== undefined ? data.data.map(item => {
 return ( <div className="primary" key={item.Title}>
<h1> Title: {item.Title} </h1>
<h2> Artist: {item.Artist} </h2>
<h2> Genre: {item.Genre} </h2>
  </div>
   )
 }) : null
  }
</div>
  )}

export default App