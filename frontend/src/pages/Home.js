import React from 'react'
import Company from './Company'
import Feed from './Feed'
import City from './City'
import Menu from '../components/Menu'



const Home = () => {
  return (
    <section>
      <div><Menu/></div>
    <div><City/></div><br></br>
      <div><Feed/></div><br></br>
      <div><Company/></div>
      </section> 
      

  )
}

export default Home