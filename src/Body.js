import React from 'react'
import './Body.css';
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';
function Body({ spotify }){
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    const playPlayList = (id) =>{
        spotify.play({
            context_uri: `spotify:playlist:37i9dQZEVXcKbYmQ3uvzNd`,
        })
        .then((res)=>{
            spotify.getMyCurrentPlayingTrack().then((r)=>{
                dispatch({
                    type: 'SET_ITEM',
                    item: r.item,
                });
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                });
            });
        });
    };
    const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    return(
        <div className="body">
           <Header spotify={spotify}/>
           <div className="bodyinfo">
               <img src={discover_weekly?.images[0].url} alt="" />
               <div className="bodyinfotext">
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
               </div>
           </div>
           <div className="bodysong">
               <div className="bodyicons">
                   <PlayCircleFilledIcon className="bodyshuffle" onClick={playPlayList}/>
                   <FavoriteIcon fontSize="large"/>
                   <MoreHorizIcon />
               </div>
               {discover_weekly?.tracks.items.map(item =>(
                   <SongRow playSong={playSong} track={item.track} />
               ))}
           </div>
        </div>
    );
}

export default Body;