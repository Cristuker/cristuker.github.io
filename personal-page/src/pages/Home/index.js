import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/navbar/index';
import Routes from '../../routes';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './style.css';
import Picture from '../../assets/dog.jpg';

const useStyles =  makeStyles(theme => ({

    root:{
        display:'flex',
        '& > *':{
            margin: theme.spacing(1),
        }
    }
}))

const Home = () =>{
    
    const classes = useStyles();

    return(<>
        <Container id="header">
            <div className={classes.root} >
            <Avatar src={Picture} />
            <h1>Cristian Silva</h1>
            </div>

        </Container>
        <Navbar></Navbar>
        <Container>
            <Routes></Routes>
        </Container>
    </>
    )
}

export default Home;