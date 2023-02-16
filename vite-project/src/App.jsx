import React, { useState, useEffect, useForm } from 'react'
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
  <h1 className="albumsowned">💽Albums Owned💽</h1>
  <Stylesheets />
  {
 data !== undefined ? data.data.map(item => {
 return ( <div className="primary" key={item.Title}>
<h2> Title: {item.Title} </h2>
<h3> Artist: {item.Artist} </h3>
<h3> Genre: {item.Genre} </h3>
  </div>
   )
 }) : null
  }
</div>
  )}

  function post_album()
  const {register, handleSubmit} = useForm();
  const onSubmit =(d) =>
  alert(JSON.stringify(d));

   return (
       <form onSubmit={handleSubmit(onSubmit)}>
           <label>
              Album Name:
           <input {...register("item.Title")} />
          </label>
           <label>
               Artist Name:
           <input {...register("item.Artist")} />
           </label>
           <label>
              Genre:
          <input {...register("item.Genre")} />
          </label>
           <p>Render: </p>
      </form>
   )
export {App, post_album}