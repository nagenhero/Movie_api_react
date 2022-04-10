
import { useState,useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import './App.css';
import { CustomCard } from './components/card/CustomCard';
import { MovieList } from './components/movie-list/MovieList';
import { SearchForm } from './components/searchform/SearchForm';
import { Title } from './components/Title';
import { fetchMovie } from './helper/axiosHelper';
import { randomChar } from './randomGeneratorHelper';

function App() {
  const[searchMovie,setSearchMovie]=useState({})
  const[movieList,setMovieList]=useState([]);
  useEffect(()=>{

    console.log("use effect executed..")
    const char=randomChar();
    getMovie(char);


  },[])
  const getMovie= async search=>
  {
 
    const {data}= await fetchMovie(search);
    setSearchMovie(data);
   
  }
  const addToList=(type)=>
  {
    setMovieList([...movieList,{...searchMovie,cat:type}])
    setSearchMovie({});
  }
   const deletemovie=(imdbID)=>
   {
     //alert(imdbID);
     if(window.confirm("Are you sure you wan to delte"))
     {
     const filterMovieList= movieList.filter(movie=>movie.imdbID !==imdbID);
     setMovieList(filterMovieList);
   }
  }
  //console.log(MovieList,searchMovie);
  return (
    <div className="wrapper">
      <Container>
      <Title/>
      <SearchForm getMovie={getMovie}/>
      {searchMovie?.imdbID&&(<CustomCard movieObj={searchMovie} func={addToList}/>


      )}
      
      <hr/>
      <MovieList movieList={movieList} deleteMovie={deletemovie} />
      </Container>
    </div>
  );
}

export default App;
