import React from 'react'
import {Container,Form,Row,Col,ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../stylesheets/homescreen.css';
import Header from './Header';
import map from '../assets/map.jpg';

const HomeScreen = () => {
    const styles={
        divStyle : {
            marginTop: '15px',
          },
          searchStyle:{
            border:"20px",
            width:"700px"
        }  ,
        blogStyle:{
            backgroundColor: 'rgb(222, 233, 250)',
            // width: '100px',
            height: '200px',
            textAlign:"center"
        },
        h3Style:{
            color:"black"
        },
        h4Style:{
            color:"black",
            marginLeft:"200px",
        },
        h6Style:{
            marginLeft:"86px"
        },
        i:{
            marginTop:'60px',
            marginLeft:'750px'
        },
        like:{
            marginTop:'60px'
        },
        share:{
            marginTop:"60px",
            marginLeft:"20px"
        },
        mapBox:{
            height:"300px",
            marginBottom:"50px",
            marginTop:"40px"
        },
        map:{
            // backgroundColor:"rgb(232, 219, 183)",
            backgroundImage:`url(${map})`,
            height:"300px",
        },
        pinStyle:{
            first:{
                color:"rgb(224, 155, 178)",
                fontSize: '50px',
                marginTop:"30px",
                marginLeft:"30px"
            },
            second:{
                color:"rgb(99, 198, 247)",
                fontSize: '50px',
                marginTop:"60px",
                marginLeft:"100px"
            },
            third:{
                color:"rgb(173, 160, 158)",
                fontSize: '50px',
                marginTop:"50px",
                marginLeft:"150px"
            },
            fourth:{
                color:"rgb(227, 215, 109)",
                fontSize: '50px',
                marginTop:"50px"
            }
        },
        other:{
            backgroundColor:"rgb(240, 246, 247)",
            height:"70px",
            marginBottom:"20px",
            color:"black"
        },
        addPin:{
            fontSize: '40px',
            marginTop:"50px",
            marginLeft:"40px",
            color:"rgb(64, 148, 56)"
        }
    
    }  
    return (
       <div className="header">
           <Header/>
           <Container>
               <Row>
                   <Col>
                        <Form>
                            <Form.Group >
                                    <Form.Label style={styles.divStyle} className="py-0"><h6>Search for Pin</h6></Form.Label>
                                    <Form.Control style={styles.searchStyle} type="text" placeholder="What you want to explore?" />
                            </Form.Group>
                        </Form>
                   </Col>
                   <Col>
                   <Link to='/addPin'><i style={styles.addPin} class="fas fa-plus"> PIN</i></Link>
                   </Col>
               </Row>
                <Container style={styles.mapBox}>
                    <h4 style={styles.h4Style}>EXPLORE YOUR HUB</h4>
                    <Row>
                        <Col style={styles.map} sm={12} md={8}>
                            <Row>
                                <Col>
                                    <Link to='/pin'><i style={styles.pinStyle.first} class="fas fa-map-marker-alt"><h6>MyArt</h6></i></Link>
                                </Col>
                                <Col>
                                <Link to='/pin'><i style={styles.pinStyle.second} class="fas fa-map-marker-alt"><h6>MyArt</h6></i></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Link to='/pin'><i style={styles.pinStyle.third} class="fas fa-map-marker-alt"><h6>MyArt</h6></i></Link>
                                </Col>
                                <Col>
                                <Link to='/pin'><i style={styles.pinStyle.fourth} class="fas fa-map-marker-alt"><h6>MyArt</h6></i></Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <h6 style={styles.h6Style}>Know Your Color</h6>
                        <ListGroup>
                            <ListGroup.Item variant="danger">Food</ListGroup.Item>
                            <ListGroup.Item variant="secondary">HandCraft</ListGroup.Item>
                            <ListGroup.Item variant="success">Museums</ListGroup.Item>
                            <ListGroup.Item variant="info">Travel</ListGroup.Item>
                            <ListGroup.Item variant="warning">Art</ListGroup.Item>
                            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
                        </ListGroup>
                        </Col>
                    </Row>
                </Container>
                <Container style={styles.other} className="py-3">
                    <Row>
                        <Col>
                        EXPLORE OTHER HUBS
                        </Col>
                        <Col>
                         RECOMMENDED PINS
                        </Col>
                        <Col>
                            UPCOMING EVENTS
                        </Col>
                    </Row>
                </Container>
                <div style={styles.blogStyle}>
                  <h3 className="py-3" style={styles.h3Style} >BLOGS</h3>
                  <p>Write your blogs here.
                      <br/>
                  </p>
                  <i style={styles.like} class="fas fa-heart">Like</i>
                  <i style={styles.share} class="fas fa-share-square">Share</i>
                  <i style={styles.i} class="fas fa-feather">Write a Blog</i>
                </div>
           </Container>
       </div>
    )
}

export default HomeScreen

