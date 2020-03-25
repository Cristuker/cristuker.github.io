import React, { useState } from 'react';
import axios from 'axios';

const Home = () =>{

    const [bio,setBio] = useState('');

    try{
        axios.get('https://api.github.com/users/cristuker')
            .then((response)=>{
                const { bio } = response.data;
                setBio(bio)
            });
    }catch(error){
        throw Error;
    }

    return (
    <>
        <h1>{bio}</h1>
    </>
    )
}

export default Home;