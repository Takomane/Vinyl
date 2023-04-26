import React, { useEffect } from "react";

export default function Update(){
useEffect(() => {
    post("http://localhost:5000/Albums")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, [])};

  const response = await fetch(url, 
  method, 'POST' , {
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(), 
  abortController

})