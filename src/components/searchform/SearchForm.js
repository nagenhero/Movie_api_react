import React,{useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


export const SearchForm = ({getMovie}) => {
    const [search,setSearch]=useState("");
    const handleChange=e=>
    {
        const{name,value}=e.target;
        setSearch(value);
    }
    const handleOnSubmit=e=>
    {
        e.preventDefault();
        getMovie(search);
       // console.log(search);
    }
  return (
    <div>SearchForm


        {/* FORM FOR SEARCH */}
        <Form onSubmit={handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control placeholder="First name" onChange={handleChange}/>
    </Col>
    <Col>
    <Button variant="success" type="submit">Search</Button>
    </Col>
  </Row>
</Form>
    </div>
  )
}
