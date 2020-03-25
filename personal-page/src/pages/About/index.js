import React,{ useState } from 'react';
import axios from 'axios';
const About = () =>{

    const [repo, setRepo] = useState('');

    try{
        axios.get('https://api.github.com/users/Cristuker/repos')
            .then((response)=>{
                setRepo(JSON.stringify(response.data));
                console.log(response)
                
            });
    }catch(error){
        throw Error;
    }

    return(
        <>
            <p>{repo}</p>
        </>
    )
}

export default About;