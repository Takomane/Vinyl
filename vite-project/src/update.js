import React, { useEffect } from "react";


useEffect(() => {
    post("http://localhost:5000/Albums")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  const response = await fetch(url, 
  method, 'POST' , {
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(), 
  abortController


  // method: "POST", // *GET, POST, PUT, DELETE, etc.
})