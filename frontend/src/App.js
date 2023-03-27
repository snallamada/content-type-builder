import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Feed from './pages/Feed'
// import City from './pages/City'
import useFetch from './hooks/useFetch'



const App = () => {
const {data, loading, error} = useFetch('http://localhost:1337/api/cities')
if (loading) return <p>Loading.......</p>
if (error) return <p>Please check your api...</p>

  return (
<div>{data.map(data =>{
  <div key={data.id}>{data.attributes.cityname}</div>
})}</div>
  )
}

export default App