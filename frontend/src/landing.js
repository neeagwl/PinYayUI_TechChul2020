import React from 'react';
import {Link} from 'react-router-dom';
// import Classes from './landing.scss';
import {Container} from 'react-bootstrap';
// import Background from './assets/bg.jpg';

const Home = () => {
    const styles={
        body:{
        //    backgroundColor:"rgb(188, 222, 232)"
        },
        
        h1:{
            textAlign: 'center',
            marginTop:'250px',
            fontSize: '60px',
            color: 'rgb(139, 197, 214)'
        },
        h3:{
            textAlign: 'center',
            color: 'rgb(217, 220, 223)'
        },
        h2:{
            textAlign: 'right',
            fontSize: '30px',
            color: 'rgb(217, 220, 223)'
        }
        ,
        i:{
            // marginTop:'200px' ,
            fontSize: '70px',
            color:'rgb(209, 206, 38)'
        },
        tag1:{
            textAlign: 'center',
        },
        tag2:{
            marginTop:"200px",
            marginLeft:"420px"
        }
    }
    return (
        <div style={styles.body}>
            <Container>
            <div>
            <Link to='/home'>
              <h1 style={styles.h1}>PinYay</h1>
            </Link>
                <h3 style={styles.h3}>Pin Your Place</h3>
                <h3 style={styles.tag1}>Connect Places with People</h3>
                <h2 style={styles.tag2}>Our PlaceBook!</h2>
                <h2 style={styles.h2}><i style={styles.i} class="fas fa-hand-holding-usd"></i>Donate</h2>
            </div>
        </Container>
        </div>
    )
}

export default Home
