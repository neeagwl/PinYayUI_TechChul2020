import React from 'react';
import {Link} from 'react-router-dom';
// import Classes from './landing.scss';
import {Container} from 'react-bootstrap';
import Background from './assets/bg.jpg';

const Home = () => {
    const styles={
        body:{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
    
            /* background-color: rgb(151, 188, 221); */
        },
        
        h1:{
            textAlign: 'center',
            marginTop:'300px',
            fontSize: '50px',
            color: 'rgb(217, 220, 223)'
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
            marginTop:'200px' ,
            fontSize: '70px',
            color:'rgb(209, 206, 38)'
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
                <h2 style={styles.h2}><i style={styles.i} class="fas fa-hand-holding-usd"></i>Donate</h2>
            </div>
        </Container>
        </div>
    )
}

export default Home
