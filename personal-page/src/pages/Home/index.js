import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/navbar/index';
import Routes from '../../routes';
const Home = () =>{
    return(<>
        <Container></Container>
        <Navbar></Navbar>
        <Container>
            <Routes></Routes>
        </Container>
    </>
    )
}

export default Home;