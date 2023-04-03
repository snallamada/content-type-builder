import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




const Menu = () => {
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      return (

 
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>

  )
    }
    

export default Menu






















