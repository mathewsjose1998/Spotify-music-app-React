//client id   303c3b40ace344ca9a9b75db7ea2f2e6
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Player from "./components/Player";

import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  //above line user id=s taken from the datalayer ie; datalayer.user
  //dispatch is used to pull or push ityems in datalayer ie; to get or update or add in datalayer

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //  setToken(_token)
      //set the access token to spotify web api
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        //to add items to the datalayer using the dispatch
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
     
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcFdUqjSAPRYh').then((response)=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response

        })
      })
      spotify.getMyTopArtists().then((response) =>
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
  }, [token,dispatch]);

  return <div className="App">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
