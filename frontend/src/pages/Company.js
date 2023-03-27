import React from 'react'
import { useEffect,useState } from 'react';

const Company = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch("http://localhost:1337/api/names")
      .then(response => response.json())
      .then(result => {
       setData(result.data)
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      
  
        {data.map(result => (
  
          <div>
          <h1>{result.attributes.title}</h1>
          <h4>{result.attributes.discription}</h4>
         </div>
  
        ))}
   
    </div>
  )
}

export default Company