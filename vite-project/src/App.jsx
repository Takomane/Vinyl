import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

useEffect(() => {
  const getData = async () => {
    const request = await fetch('http://localhost:5000/Albums');
    const response = await request.json();
    console.log(response)
    return response;
  }

  try {getData()
   setData(getData());
  } catch (err){
    console.log(err);
  }

}, [])

  return(
  <div className="App">
{data.map(data => {
  return <pre>{JSON.stringify(data)}</pre>
})}
  </div>
  )
      }

export default App