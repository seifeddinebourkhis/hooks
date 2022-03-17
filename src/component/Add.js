import { Rating } from '@mui/material'
import React, { useState } from 'react'
import {Modal,Button,Form,Row,Col} from 'react-bootstrap'




const Add = ({show,handleClose, setMovies, movies}) => {
    // const [newMovie,setNewMovie] = useState({
    //     title:"",
    //     rate :1,
    //     duration:"",
    //     genre:"",
    //     description:"",
    //     main_img:"",
    // })
    const [addTitle, setaddTitle] = useState("")
    const [addDescription, setDescription] = useState("")
    const [addPoster, setAddPoster] = useState("")
    const [addBackground, setAddBackground] = useState("")
    const [addDuration, setAddDuration] = useState(0)
    const [addYear, setAddYear] = useState(0)
    const [rating,setRating]=useState(0)
    const handleRating = (rate) => {
      setRating(rate)
      }
      // const handleChange=(e)=>{
      //     setNewMovie({...newMovie,[e.target.name]:e.target.value, [e.target.rate]:e.target.value})
      // }
      const addMovieFunction = (e) => {
        e.preventDefault();
        setMovies([
          ...movies,
          {
            title: addTitle,
            description: addDescription,
            main_img: addPoster,
            second_img: addBackground,
            duration: addDuration,
            date: addYear,
            rate: rating
          }
        ])
        handleClose()
      }
  return (
    <div>
         <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" onChange={(e) => setaddTitle(e.target.value)}name="title" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>img url</Form.Label>
      <Form.Control onChange={(e) => setAddPoster(e.target.value)} type="text" placeholder="img url" name="img url" />
    </Form.Group>
  </Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>movie background</Form.Label>
      <Form.Control onChange={(e) => setAddBackground(e.target.value)} type="text" placeholder="movie background" name="movie background" />
    </Form.Group>
  {/* <Rating onClick={handleRating} ratingValue={rating} /> */}
  <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>description</Form.Label>
    <Form.Control as="textarea" rows={3}onChange={(e) => setDescription(e.target.value)}name="description" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>duration</Form.Label>
      <Form.Control onChange={(e) => setAddDuration(e.target.value)} name="duration" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Year</Form.Label>
      <Form.Control onChange={(e) => setAddYear(e.target.value)} name="year" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>genre</Form.Label>
      <Form.Select defaultValue="Choose genre" name="genre">
        <option>action</option>
        <option>adventure</option>
        <option>comedy</option>
      </Form.Select>
    </Form.Group>

    
  </Row>

 </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovieFunction}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
 