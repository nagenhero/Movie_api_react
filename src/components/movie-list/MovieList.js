import { Button, Col } from 'react-bootstrap'
import React ,{useState}from 'react'
import { ButtonGroup, Row } from 'react-bootstrap'
import { CustomCard } from '../card/CustomCard'
import { CustomList } from '../card/CustomList'

export const MovieList = ({movieList, deleteMovie}) => {
  const[mood,setMoood]=useState("");
  const[isGrid,setIsGrid]=useState(true);
  //filter first then dispaly
  const filterMovies=mood?
  movieList.filter(movie=>movie.cat===mood)
  :movieList;

  return (
    <div className="py-3">
      <Row>
        <Col>
        {mood||"All"} list is selected
        </Col>
      
        </Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
      <ButtonGroup aria-label="Basic example">
  <Button variant="primary" onClick={()=>
    setMoood("")}>All</Button>
  <Button variant="info" onClick={()=>setMoood("happy")}>Happy</Button>
  <Button variant="warning" onClick={()=>setMoood("lazy")}>Lazy</Button>
</ButtonGroup>
<ButtonGroup aria-label="Basic example">
  <Button variant="primary" onClick={()=>setIsGrid(true)}>Grid</Button>
  <Button variant="info" onClick={()=>setIsGrid(false)}>List</Button>
  
</ButtonGroup>
</Col>
      </Row>
      <Row>
        <Col  className='d-flex flex-wrap'>
        {filterMovies.map((movie,i)=>  isGrid?
          (

            
              <CustomCard key={i} movieObj={movie} btnDelete={true} func={deleteMovie}/>
            
          ):
          (
            <CustomList key={i} movieObj={movie} btnDelete={true} func={deleteMovie}/>
          )
          

       )}
        </Col>
      </Row>
    </div>
  )
}
