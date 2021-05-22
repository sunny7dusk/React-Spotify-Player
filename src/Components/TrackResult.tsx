import React from 'react';

import {
  Typography, Grid,
  CardActionArea, Card, CardMedia, CardContent,
} from '@material-ui/core';

interface SpotifyData {
    artists: string,
          title: string,
          uri: string,
          albumUrl: string,
}

interface Props{
    track: SpotifyData;
    chooseTrack: Function;
}
export const TrackResult:({ track }:Props) => JSX.Element = ({ track, chooseTrack }:Props) => {
  const trackItem = track;

  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <>
      {/* <Grid item><Typography variant="h5">{trackItem.albumUrl}</Typography></Grid> */}
      <Grid
        item
        xs={6}
        style={{
          margin: '0.5rem',
        }}
      >
        {/* <img src={trackItem.albumUrl} alt={trackItem.uri} /> */}
        <Card style={{
          width: '100vw',
          height: '100vh',
          maxWidth: '20vw',
          maxHeight: '20vh',
          background: 'rgba( 255, 255, 255, 0.25 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 4px )',
          borderRadius: '10px',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}
        >
          <CardActionArea
            style={{
              display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'center',
            }}
            onClick={handlePlay}
          >
            <CardMedia
              component="img"
              image={trackItem.albumUrl}
              title={trackItem.uri}
              style={{
                width: '100vw', maxWidth: '10vw', height: '100vh', maxHeight: '20vh',
              }}
            />
            <CardContent style={{
              width: '100vw', maxWidth: '10vw',
            }}
            >
              <Typography variant="body1">{trackItem.title}</Typography>
              <Typography variant="body2">{trackItem.artists}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};
