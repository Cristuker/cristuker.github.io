import React from 'react';
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const navBar = () =>{
    return(<>
    <Paper square>
        <Tabs
        indicatorColor="primary"
        textColor="primary"
        >
        <Tab href="/" label="Home"/>
        <Tab href="/skills" label="Skills"/>
        <Tab href="/messages" label="Messages"/>
        <Tab href="/contact" label="Contact"/>
        <Tab href="/about" label="About"/>
        </Tabs>
    </Paper>
    </>
    )
}

export default navBar;