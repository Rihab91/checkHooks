import React, { useState , useRef } from 'react'
import MovieList from './MovieList' ;
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';
import Addmovie from './Addmovie';
import Description from './Description' ;
import './App.css';
const App = () => {
  const [add,setadd]=useState()

  const x=useRef()
  // state 
  const [movies, setmovies] = useState([
    { id:uuidv4(),
      title: 'Scream 3', 
      description: 'While Sidney and her friends visit the Hollywood set of Stab 3, the third film based on the Woodsboro murders', 
      posterURL: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
      rating: '9.5' },
     {id:uuidv4(),
      title: 'The boy', 
      description: 'A young boy tries to get by between a complicated private life, family and social difficulties.', 
      posterURL: 'https://content.wepik.com/statics/28430531/preview-page0.jpg',
      rating: '8.5' },
     {id:uuidv4(),
      title: 'Star Wars EP7', 
      description: 'Star Wars, or Star Wars (former French name), is a series of science fiction films, space opera style', 
      posterURL: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg',
      rating: '8' },
  ]);
  const [rates,setRates]=useState(0);
  const [title,setTitle]=useState("");
return (


<div className="App" id='appli'>
  <header>
   <h1 >My Movie Application</h1>
  </header>
   {/* passer setmovies a addmovie comme state */}
      <Addmovie setmovies={setmovies} movies={movies} />
      <Filter rate={rates} setRates={setRates} setTitle={setTitle} />
      
   {/* Our component MovieList (movies : state in app.js qui contient notre liste de movies*/}
   <MovieList  movies={movies.filter((movie)=>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())&& movie.rating>=rates)}/>
  </div>



);
}

 
  
  



export default App