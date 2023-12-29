import React from 'react'
import  {useRef} from 'react'
import StarRatingComponent from 'react-star-rating-component'


export default function Filter({rates ,setRates,setTitle}) {
    const x=useRef()
  return (
    <div>
      
        <input type="text" placeholder='Movie Title' ref={x} onChange={()=>setTitle(x.current.value)} />
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rates}
          onStarClick={(value)=>setRates(value)}
          emptyStarColor={'black'}
        />
    </div>
  )
}