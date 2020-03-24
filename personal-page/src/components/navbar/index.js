import React from 'react';
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Container from '@material-ui/core/Container';
import './styles.css'


const navBar = () =>{
    return(
    <Container id="container">
        <Paper elevation={3} square>
            <Tabs id="navbar" indicatorColor="primary" textColor="primary">
                <HomeRoundedIcon className="icon"/><Tab href="/" label="Home"></Tab>
                <CodeRoundedIcon className="icon"/><Tab href="/skills" label="Skills"/>
                <ChatBubbleOutlineRoundedIcon className="icon" /><Tab href="/messages" label="Messages"/>
                <PermContactCalendarRoundedIcon className="icon" /><Tab href="/contact" label="Contact"/>
                <InfoRoundedIcon className="icon" /><Tab href="/about" label="About"/>
            </Tabs>
        </Paper>
    </Container>
    )
}

export default navBar;