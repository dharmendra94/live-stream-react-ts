import React from 'react';
import './App.css';
import AppBar from "@mui/material/AppBar";
import Typegraphy from "@mui/material/Typography";
import VideoPlayer from './components/video-player/video-player';
import Options from './components/options/options';
import Notifications from './components/notifications/notifications';

function App() {
    console.log(`App component rendered`);

    return (
        <div>
            <AppBar position="static" color="inherit">
                <Typegraphy variant="h2" align="center">One to one video</Typegraphy>
            </AppBar>
            <VideoPlayer></VideoPlayer>
            <Options>
                <Notifications></Notifications>
            </Options>
        </div>
    );
}

export default App;
