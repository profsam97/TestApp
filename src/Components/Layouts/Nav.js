import React from 'react'
import Button from '@mui/material/Button'
import { AppBar,  Grid, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
  color : {
      backgroundColor: 'red',
  }
})
const Nav = () => {
  const classes = useStyle();
  return (
    <AppBar position='static' style={{ background: '#202020d9' }} >
      <Toolbar>
        <Grid container >
          <Grid item xs={4} md={0}/>
          <Grid item xs={2} md={10} >
        <Button variant='outlined' color="inherit">TestApp</Button>
        </Grid>
         <Grid item xs={4} md={0}/>
      </Grid>
    </Toolbar>
    </AppBar> 
     )
}

export default Nav