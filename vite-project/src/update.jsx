import React, { useEffect, useState } from "react";

export default function Update(){
const [data, setData] = useState('');
const [newData, setNewData] = useState('');
useEffect(() => {
  if (newData) {
  fetch("http://localhost:5000/Albums/add", {
    method: 'POST' , 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData), 
  })
   .then((response) => response.json())
   .then((res) => setData(res))
   .catch((error) => console.error(error));
} [newData]});

return A()
};