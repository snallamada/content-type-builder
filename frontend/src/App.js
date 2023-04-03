import React from 'react'
import Home from './pages/Home'
import { Container } from '@mui/system'

const App = () => {
  return (
   
    <Container fixed sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
    
       <Home/>
       </Container>
  ) 
}

export default App