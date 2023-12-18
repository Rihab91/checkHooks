import React, { useState ,useEffect , useRef } from 'react'
import MovieList from './MovieList'

const App = () => {
  const [add,setadd]=useState()
  const x=useRef()
  const y=useRef()
  const z=useRef()
  const f=useRef()
  const [movies, setmovies] = useState([
    { title: 'Scream 3', 
      description: 'While Sidney and her friends visit the Hollywood set of Stab 3, the third film based on the Woodsboro murders', 
      posterURL: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
     rating: '9.5' },
     { title: 'The boy', 
      description: 'A young boy tries to get by between a complicated private life, family and social difficulties.', 
      posterURL: 'https://content.wepik.com/statics/28430531/preview-page0.jpg',
     rating: '8.5' },
     { title: 'Star Wars EP7', 
     description: 'Star Wars, or Star Wars (former French name), is a series of science fiction films, space opera style', 
     posterURL: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg',
    rating: '8' },
  ]);
return (
  <div className="App">
 
    <header className="App-header">
    <h1 style={{color: "red", margin: "10px", textAlign: "center" }}  > The 3 best movies of all time </h1>
    <div style={{display:'flex',flexDirection:'row'}}>
          <input type="title"        ref={x}/>
          <input type="discreption"  ref={y}/>
          <input type="posterURL"    ref={z}/>
          <input type="rating"       ref={f} />
          <button onClick={()=>{()=>{setadd({title:x.current.value,},{description:y.current.value},{description:y.current.value},{posterURL:z.current.value},{rating:f.current.value})}}}> Add </button>
          <button onClick={()=>console.log(x.current.value)}> Remove </button> 
    </div>
    <MovieList movies={movies}/>
    </header>

      
 
  </div>
)
}

export default App