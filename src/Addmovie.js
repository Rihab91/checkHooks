import React, { useRef , useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import StarRatingComponent from 'react-star-rating-component';

// add  movie 
function Addmovie({setmovies,movies}) {
    // to read we use  :useref()
    const title=useRef()
    const description=useRef()
    const posterURL=useRef()
    // create state rate :for stars 
    const [rate,setRate]=useState()
    // function addmovie
    const addmovie=()=>{
      // array with ancien movies +objets
        setmovies([...movies,{
            id:uuidv4(),
            // to read the data for this infos (our input) : .current.value
            title:title.current.value,
            description:description.current.value,
            posterURL:posterURL.current.value,
            rating:rate,
        }])
    }

  return (
    <div>
              
        <input type="text" placeholder='Movie Title' ref={title} />
        <input type="text" placeholder='Movie Description' ref={description} />
        <input type="text" placeholder='Movie Poster' ref={posterURL} />
        {/* starcount with 5 stars */}
        <StarRatingComponent 
          name="rate" 
          starCount={5}
        //     initial value
          value={rate}
        //  function onStarClick change the state (with setRate):(take the next value  : star)
          onStarClick={(value)=>{setRate(value)}}
        />
        <button onClick={addmovie} >Add new movie</button>
    </div>
  )
}

export default Addmovie

  