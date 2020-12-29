import React from 'react';
import {Card,ListGroupItem, ListGroup, Container} from 'react-bootstrap';
import Header from './Header';

const Pin = () => {
    const styles={
        card:{
            marginTop:"50px",
            width:"60rem",
            marginLeft:"100px"
        }
    }
    return (
        <div>
            <Header/>
            <Container>
            <Card style={styles.card}>
  <Card.Img variant="top" src="https://www.thewholeworldisaplayground.com/wp-content/uploads/2017/03/Italy-Rome-Best-Photo-Locations-23.webp" />
  <Card.Body>
    <Card.Title>The Colosseum</Card.Title>
    <Card.Text>
    The Colosseum, is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum and is the largest ancient amphitheatre ever built,
     and is still the largest standing amphitheater in the world today, despite its age.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush font-weight-bold">
    <ListGroupItem><strong>ADD AS FRIEND</strong></ListGroupItem>
    <ListGroupItem><b>REVIEWS</b></ListGroupItem>
    <ListGroupItem><b>PHOTOS</b></ListGroupItem>
    <ListGroupItem><b>SUPPORT</b></ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" style={{color:"blue"}}>GMap Link</Card.Link>
    <Card.Link href="#" style={{color:"blue"}}>Social Link</Card.Link>
  </Card.Body>
</Card>
        </Container>
        </div>
       
    )
}

export default Pin
