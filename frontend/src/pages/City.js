import React from 'react'
import { useEffect, useState } from 'react';

const City = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:1337/api/cities")
      .then(response => response.json())
      .then(result => {
       setData(result.data)
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div style={{listStyle:"none"}}>
      
  
        {data.map(result => (
  
          <div>
          <h1>{result.id}.{result.attributes.cityname}</h1>
         </div>
  
        ))}
   
    </div>
  )
}

export default City