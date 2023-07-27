import React, { useState, useEffect } from "react";
import Stylesheets from "./Stylesheet";
import Add from "./Add";
import Update from "./update";

const express = import('express');
const cors = import('cors');
const app = express();

// Allow requests from all origins (for development)
app.use(cors());

// Your routes and other middleware here

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/Albums")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <h1 className="albumsowned">💽Albums Owned💽</h1>
      <Stylesheets />
      {data !== undefined
        ? data.data.map((item) => {
            return (
              <div className="primary" key={item.Title}>
                <h2> Title: {item.Title} </h2>
                <h3> Artist: {item.Artist} </h3>
                <h3> Genre: {item.Genre} </h3>
              </div>
            );
          })
        : null}
      <Add />
    </div>
  );
}
export default App;
