import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

useEffect(() => {
  const fetchData = async () => {
    const data = await fetch('http://localhost:5000/api/vinyl')
  }

fetchData()
  .catch(console.error);
}, 
[])}

export default App