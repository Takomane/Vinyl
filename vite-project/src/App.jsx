import React, { useState, useEffect } from 'react'

function App() {
  const [albums, data, setData] = useState([{}])

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
  {albums.map(albums => {
  return <pre>{JSON.stringify(albums)}</pre>
})}
  </div>
  )
      }

export default App