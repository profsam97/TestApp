import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import MovieList from './MovieList'
const useStyle = makeStyles({

    container: {
        paddingTop: 20,
        marginBottom: 20
    }
})
const Movie = (props) => {
    const classes = useStyle()
    const movie = props.movie
    const category = props?.category;
  return (
    <>
    {/* <Typography variant='h5' mt={1}>Actions</Typography> */}
    {category && <Typography variant='h5' mt={1}>{category}</Typography> }
    <div className='myScroll'>
   <div className={classes.container}  style={{ "white-space": "nowrap" }}>
     {movie.map(movies =><MovieList key={movies.Title}  movie={movies}/> )} 
    </div>
    </div>
    </>
  )
}

export default Movie