import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CustomList = ({movieObj, func, btnDelete=false}) => {
  return (
    <Card style={{ width: "100%" }} className="mt-5 me-4 d-flex flex-row">
  <Card.Img variant="top" src={movieObj.Poster}  style= {{width:"200px",height:"300px"}} />
  <Card.Body>
    <Card.Title>{movieObj.Title}</Card.Title>
    <Card.Title>{movieObj.imdbRating}</Card.Title>
    <p>{movieObj.Plot}</p>
    
   {btnDelete?
   (  <div className="d-grid gap-2">
  <Button variant="danger" size="lg" onClick={()=>func(movieObj.imdbID)}>
   Delete
  </Button>
  
</div>):
(
  <div className= "d-flex justify-content-around">
<Button variant="info" onClick={()=>func("happy")}>Happy</Button>
    <Button variant="secondary"  onClick={()=>func("lazy")}>Lazy</Button>
    </div>
  
)
}


  </Card.Body>
</Card>
  )
}
