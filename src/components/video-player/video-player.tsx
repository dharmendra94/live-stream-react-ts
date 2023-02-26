import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { SocketContext } from "../../socket-context";

const useStyles = makeStyles()((theme) => ({
    video: {
        width: "550px",
        [theme.breakpoints.down('xs')]: {
            width: "300px"
        }
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px'
    }
}));


const VideoPlayer = () => {
    console.log(`Video player rendered`);

    const { classes } = useStyles();

    // TODO: Create a type for the context
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext) as any;

    console.log(myVideo);

    return (
        <Grid container className={classes.gridContainer}>

            {/* My video */}
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                    <video playsInline muted ref={myVideo} autoPlay className={classes.video}></video>
                </Grid>
            </Paper>

            {/* User video */}
            {
                callAccepted && !callEnded && (<Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'User name'}</Typography>
                        <video playsInline muted ref={userVideo} autoPlay className={classes.video}></video>
                    </Grid>
                </Paper>)
            }
        </Grid>
    );
}

export default VideoPlayer;