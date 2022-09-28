import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

useEffect(() => {
  const getData = async () => {
    const request = await fetch('/api/vinyl');
    const response = await request.json();
    return response;
  }

  try {
    setData(getData());
  } catch (err){
    console.log(err);
  }

}, [])

  return(
    <div>
      {(typeof data.vinyl === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.vinyl.map((vinyl, i) => (
          <p key={i}>{vinyl}</p>
        ))
      )}
    </div>
  )
        }

export default App