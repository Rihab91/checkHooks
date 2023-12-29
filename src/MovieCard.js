import React from 'react'
import Card from 'react-bootstrap/Card';
import {  useRef } from 'react';

const MovieCard  = ({movie}) => {

  return (
    <div >
    <Card style={{width: '18rem', margin:'10px'}}>
    <Card.Img style={{ height: '420px', objectFit: 'cover' }} src={movie.posterURL}  />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text >
          description: {movie.description} <br />
          rating: {movie.rating} <br />
        
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}

export default MovieCard