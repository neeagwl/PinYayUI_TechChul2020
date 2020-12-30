import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from './Header';

const AddPin = () => {
    const styles ={
        form:{
            marginTop:"40px"
        }
    }
    return (
        <div>
            <Header/>
        <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
            <h1 style={styles.form}>PinYay Your Place!</h1>
        <Form>
                <Form.Group >
                    <Form.Label>
                        Pin Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your place name"
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Upload Photos" />
                </Form.Group>
                <Form.Group>
                <Form.Label>
                        Pin Description
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tell us more about your place!"
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label>
                        Pin Location
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Select location of the pin."
                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label>
                        Virtual Pin?
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Type Yes or no."
                    ></Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label>
                        Pin Color
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Select your pin color!"
                    ></Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label>
                        Social Media Links
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Link social media"
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">Add Pin</Button>
            </Form>
        </Col>
      </Row>
    </Container>
        </div>
    )
}

export default AddPin
