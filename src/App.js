import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromRUrl } from './spotify1';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();

function App() {

  // const [token , setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromRUrl();
    // window.location.hash="";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
        dispatch({
          type: 'SET_USER',
          user: user,
        }
        )
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcKbYmQ3uvzNd').then((response)=>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
      spotify.getMyTopArtists('37i9dQZEVXcKbYmQ3uvzNd').then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  },[]);
  return (
    <div className="App">
    {
     token? (<Player spotify={spotify}/>) :(<Login />)
    }
     {/* <Login /> */}
    </div>
  );
}

export default App;
