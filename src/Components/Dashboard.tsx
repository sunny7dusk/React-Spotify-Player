import React, { useState, useEffect } from 'react';
import {
  Grid, Button,
} from '@material-ui/core';
import {
  MuiThemeProvider,
  useTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SpotifyWebApi from 'spotify-web-api-node';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Player } from './Player';
import { useAuth } from '../useAuth';
import { TrackResult } from './TrackResult';
import '../App.css';

const spotifyApi = new SpotifyWebApi({
  clientId: '2a7b9ca071514e8a9fb2b2dea9953c8c',
});

interface Props{
    code: string|null,
    // bg: ImageType|undefined
}

interface SpotifyData {
    artists: string,
          title: string,
          uri: string,
          albumUrl: string,
}

export const Dashboard:React.FC<Props> = ({ code }:Props) => {
  const accessToken = useAuth(code || '');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<SpotifyData[]|undefined>([]);
  const [playingTrack, setPlayingTrack] = useState<SpotifyData>();
  const [playing, setPlaying] = useState(false);
  const [queue, setQueue] = useState<string[]>([]);
  const [images, setImages] = useState([]);
  const theme = useTheme();
  function chooseTrack(track:SpotifyData) {
    setPlayingTrack(track);
    setSearch('');
  }

  function useDebounced(value: string) {
    const [debouncedVal, setDebouncedVal] = useState(value);
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedVal(value);
        if (!search) { setSearchResults([]); return; }
        if (!accessToken) return;
        const formatted = search;
        spotifyApi.getPlaylist(formatted).then((res) => {
          setQueue(res.body?.tracks?.items.map((track) => (track.track.uri)));
          // console.log(queue);
          setSearchResults(res.body?.tracks?.items.map((track) => ({
            artists: track.track.artists[0].name,
            title: track.track.name,
            uri: track.track.uri,
            albumUrl: track.track.album.images[2].url,
          })));
        }, (err) => {
          console.log(err);
        });
        // if (!search.includes('playlist')) {
        //   spotifyApi.searchTracks(search).then((res) => {
        //     setSearchResults(res.body?.tracks?.items.map((track) => ({
        //       artists: track.artists[0].name,
        //       title: track.name,
        //       uri: track.uri,
        //       albumUrl: track.album.images[2].url,
        //     })));
        //   });
        // } else {
        //   const formatted = search.replace(' playlist', '');
        //   console.log(formatted);
        //   spotifyApi.getPlaylist(formatted).then((res) => {
        //     setQueue(res.body?.tracks?.items.map((track) => (track.track.uri)));
        //     // console.log(queue);
        //     setSearchResults(res.body?.tracks?.items.map((track) => ({
        //       artists: track.track.artists[0].name,
        //       title: track.track.name,
        //       uri: track.track.uri,
        //       albumUrl: track.track.album.images[2].url,
        //     })));
        //   }, (err) => {
        //     console.log(err);
        //   });
        //   console.log(queue);
        // }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [value]);
    return debouncedVal;
  }
  useDebounced(search);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // TODO
  useEffect(() => {
    setQueue(queue.sort(() => Math.random() - 0.5));
  }, [queue]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    setImages(imageList as never[]);
  };

  // function bgImages(args1, args2) {
  //   if (args1 > 0 and args2>0)
  // }

  // useEffect(() => {
  //   console.log(playing);
  // }, [playing]);

  window.history.pushState({}, '', '/');
  return (
    <ImageUploading value={images} onChange={onChange} maxNumber={1}>
      {({ imageList, onImageUpload, onImageUpdate }) => (
        <MuiThemeProvider theme={theme}>
          <Grid container direction="column" alignItems="center" style={{ width: '100vw', height: '90vh' }}>
            {!playing ? (
              <form noValidate autoComplete="off" style={{ width: '100vw' }}>
                <TextField
                  id="filled-basic"
                  label="Search using playlist code (1RE5EjfEDFgRSeYLuwoRv8 etc) "
                  variant="filled"
                  value={search}
                  fullWidth
                  style={{
                    background: 'linear-gradient(115deg, rgba(217,237,146,1) 0%, rgba(181,228,140,1) 10%, rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%, rgba(52,160,164,1) 50%, rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%, rgba(24,78,119,1) 90%)',
                  }}
                  onChange={(val) => {
                    setSearch(val.target.value);
                  }}
                />
              </form>
            ) : <></>}

            {images.length > 0 && playing
              ? imageList.map((image, index) => (
                <>
                  <div style={{ width: '100vw', height: '100vh', overflow: 'none' }}>
                    <img
                      src={image.dataURL}
                      alt=""
                      key={image.dataURL}
                      style={{
                        height: '100vh',
                        width: '100%',
                      }}
                    />
                  </div>
                </>
              )) : (
                <Button
                  variant="contained"
                  onClick={() => {
                    if (images.length > 0) {
                      onImageUpdate(0);
                    } else {
                      onImageUpload();
                    }
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  CLICK TO CHANGE BG

                </Button>
              )}
            {playing && images.length === 0 && (
            <>
              <div style={{
                height: '80vh',
                overflowY: 'auto',
                width: '90vw',
                marginTop: '1rem',
              }}
              >
                {/* <Button
                  variant="contained"
                  onClick={() => {
                    if (images.length > 0) {
                      onImageUpdate(0);
                    } else {
                      onImageUpload();
                    }
                  }}
                  style={{ marginBottom: '1rem' }}
                >
                  CLICK TO CHANGE BG

                </Button> */}
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  style={{
                    overflowX: 'hidden',
                  }}
                >
                  {searchResults !== undefined
                 && searchResults.map((track) => (
                   <div key={track.uri}>
                     <TrackResult track={track} chooseTrack={chooseTrack} />
                   </div>
                 ))}
                </Grid>
              </div>
            </>

            // eslint-disable-next-line array-callback-return
            ) }
          </Grid>
          <div style={{
            display: 'block', position: 'absolute', bottom: '1vh', width: '100vw',
          }}
          >
            {queue.length > 0 ? (
              <Player
                accessToken={accessToken}
                trackUri={queue}
                playing={setPlaying}
              />
            )
              : (
                <Player
                  accessToken={accessToken}
                  trackUri={playingTrack?.uri}
                  playing={setPlaying}
                />
              )}
          </div>
        </MuiThemeProvider>
      )}
    </ImageUploading>

  );
};
