import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'
import City from './pages/City'



const App = () => {
  return (
    
    <Router>
    <div>
      <siteHeader />
     
        <Route path='/'><Home/></Route>
        <Route path='/feed'><Feed/></Route>
        <Route path='/city'><City/></Route>
      
      </div>
      </Router>
  )
}

export default App