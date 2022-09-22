import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/Vinyl").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return(
    <div>
        {(typeof data.Vinyl === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.Vinyl.map((Vinyl, i) => (
            <p key={i}>{Vinyl}</p>
          ))
        )}
    </div>
  )
}

export default App