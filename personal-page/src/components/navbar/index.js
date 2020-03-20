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
        <Tab label="Home"/>
        <Tab label="Skills"/>
        <Tab label="Messages"/>
        <Tab label="Contact"/>
        <Tab label="About"/>
        </Tabs>
    </Paper>
    </>
    )
}

export default navBar;