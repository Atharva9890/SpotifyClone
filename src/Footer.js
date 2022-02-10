import React from 'react';  
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer(){
    return(
        <div className="footer">
            <div className="footerleft">
            <img src="https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:683656?quality=0.8&format=jpg&width=1440&height=810&.jpg" alt="" className="footersonginfo"/>
            <div className="footersonginfo">
                <h4>Y</h4>
                <p>..</p>
            </div>  
            </div>
            <div className="footercenter">
                <ShuffleIcon className="footergreen" />
                <SkipPreviousIcon className="footeri" />
                <PlayCircleOutlineIcon 
                    fontSize="large"
                    className="footeri"
                />
                <SkipNextIcon className="footeri" />
                <RepeatIcon className="footergreen" />    
            </div>
            <div className="footerright">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;