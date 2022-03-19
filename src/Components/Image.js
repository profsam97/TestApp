import React from 'react'
import Container from '@mui/material/Container'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography } from '@mui/material';

export default function Hero() {
const matches = useMediaQuery('(min-width:900px)');
  return (
<div id="hero" className="hero route bg-image" >
   <Grid container >
       <Grid item xs={2} md={1} /> 
    <Grid item xs={3}  md={12} m={3}>
       <Grid item xs={12}  container  spacing={4}    direction="column">
           <Grid item xs={5}/>
            <Grid item xs={4}>
            <Typography variant='h3' component='div'>
                Watch
            </Typography>
             <Typography variant='h3' component='div'>
                Something
            </Typography>
             <Typography variant='h3' component='div'>
                Incredible
            </Typography>
            </Grid>          
            <Grid item xs={3}/>
       </Grid>
    </Grid>
    <Grid item xs={4} md={0}/>
   </Grid>
  </div>
  )
}
