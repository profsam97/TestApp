import { Container, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React, {useEffect, useState} from 'react'
import Movie from './Movie';
import apiKey from './Helpers/apiKey';
import axios from 'axios';
import { Loader } from './UI/Loader';
const useStyle = makeStyles({
    container : {
        paddingTop: 20,
        marginBottom: 100
    }
})


const Main = () => {
  console.log(apiKey)
    const [searchItem, setSearchItem] = useState('');
    const [searchMovie, setSearchMovie] = useState([]);
    const firstMovieCat = 'Action';
    const secondMovieCat = 'Scifi';
    const [firstMovie, setFirstMovie] = useState([]);
    const [secondMovie, setSecondMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyle();
    const handleChange = event => {
        setSearchItem(curMovie => curMovie = event.target.value)
    }
     useEffect(()=> {
         if(searchItem !== ''){
           setIsLoading(true);
    axios 
    .get(`https://www.omdbapi.com/?s=${searchItem}&apikey=${apiKey}`)
    .then(function(response){
      const {data} = response
      const {Search} = data;
      setIsLoading(false);
      setSearchMovie(Search)
    })
}
  }, [searchItem]); 
      useEffect(()=> {
    axios 
    .get(`https://www.omdbapi.com/?s='action'&apikey=${apiKey}`)
    .then(function(response){
      const {data} = response
      const {Search} = data;
      setFirstMovie(Search)
    })
     axios 
    .get(`https://www.omdbapi.com/?s='the 100'&apikey=${apiKey}`)
    .then(function(response){
      const {data} = response
      const {Search} = data;
      setSecondMovie(Search)
    })
}, [])

  let context;
  if (isLoading){
    context = <Loader/>
  }else{
    context =   searchMovie && <Movie movie={searchMovie} /> 
  }
  return (
    <>
    <Container className={classes.container}> 
        <Typography variant='subtitle1'>Search </Typography>
        <TextField fullWidth   onChange={handleChange}
 id="fullWidth" />
    {context}
    {firstMovie  && <Movie movie={firstMovie} category={firstMovieCat}/>} 
    {secondMovie  && <Movie movie={secondMovie} category={secondMovieCat}  />} 
    </Container>
    </>
  )
}

export default Main