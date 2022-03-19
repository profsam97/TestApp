import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const styles = makeStyles({
  card: {
    minWidth: 215,
    minHeight: 200,
    display: "inline-block"
  },
  //  cardMedia: {
  //   margin: 'auto'
  // }
});

const MovieList = (props) => {
    const classes = styles();
    const movies  = props.movie;
     var  dots = (movies.Title.length > 35)?'...':'';
    var movs =   movies.Title.match(/.{1,22}/);
       var title = movs[0] + dots;
  return (
    <div style={{ display: "inline-block", padding: 3 }}>
      <Card className='opacs' elevation={2} spacing={2}>
            <CardMedia className={classes.cardMedia}
          image={movies.Poster}
          style={{width: '230px', height: '130px'}}
          />
        <CardContent>
          <Typography align='center' variant='h6' color="textSecondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default MovieList