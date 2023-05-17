import React, { useEffect, useState } from "react";

export default function Update(){
const [data, setData] = useState('');
const [newData, setNewData] = useState('');
useEffect(() => {
  fetch("http://localhost:5000/Albums/add", {
    method: 'POST' , 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(), 
  })
   .then((response) => response.json())
   .then((res) => setData(res));
}, [data, newData])

};