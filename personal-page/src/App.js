import React, { useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Navbar from './components/navbar/index';
import Routes from './routes';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './style.css';

const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}))

const App = () => {
    
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    
        try{
            axios.get('https://api.github.com/users/cristuker')
                .then((response)=>{
                    const { name, bio, avatar_url } = response.data;
                    console.log(response)
                    setName(name);
                    setAvatar(avatar_url)
            });
        }catch(error){
            throw Error;
        }

        axios.get(avatar)
            .then((response)=>{
                console.log('get foto',response)
            })


    
    const classes = useStyles();

    return (
      <>
          <Container id="header">
              <div className={classes.root} >
                  <Avatar id="Avatar" src={avatar} />
              </div>
              
              <h1>{name}</h1> 
          </Container>
          <Navbar />
          <Container>
              <Routes />
          </Container>
      </>
  )
}

export default App;