import React, { useState } from 'react';
import {
  Grid, Button,
} from '@material-ui/core';
import {
  MuiThemeProvider,
  useTheme,
} from '@material-ui/core/styles';
import ImageUploading, { ImageListType } from 'react-images-uploading';

// const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=2a7b9ca071514e8a9fb2b2dea9953c8c&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=2a7b9ca071514e8a9fb2b2dea9953c8c&response_type=code&redirect_uri=https://sunny7dusk.github.io/React-Spotify-Player/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

interface Props{
  // bg: ImageType,
  // bgState:React.Dispatch<React.SetStateAction<ImageType>>,
}

export const Login:(bg :Props) => JSX.Element = (bgItem:Props) => {
  const theme = useTheme();
  const [data, setData] = useState('');
  const [images, setImages] = useState([]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    setImages(imageList as never[]);
  };

  // function bgUpdate() {
  //   const handler = (e:File) => {
  //     const [file] = e;
  //     console.log(e);
  //     // if (file) {
  //     // console.log(e);
  //     // }
  //   };
  // }
  return (

    <ImageUploading value={images} onChange={onChange} maxNumber={1}>
      {({ imageList, onImageUpload, onImageUpdate }) => (
        <MuiThemeProvider theme={theme}>
          <Grid container direction="column" justify="center" alignItems="center" style={{ width: '100vw', height: '100vh' }}>
            <Button
              variant="contained"
              href={AUTH_URL}
              style={{ background: 'linear-gradient(115deg, rgba(217,237,146,1) 0%, rgba(181,228,140,1) 10%, rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%, rgba(52,160,164,1) 50%, rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%, rgba(24,78,119,1) 90%)' }}
            >
              LOGIN TO SPOTIFY

            </Button>
          </Grid>
          {/* {imageList.length !== 0 ? imageList.map((image, index) => (
            <div
              key={0}
              style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${bgItem.bg.dataURL})`,
                backgroundSize: '100vw',
              }}
            >
              <Grid container direction="column" justify="center" alignItems="center"
              style={{ width: '100vw', height: '100vh' }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    onImageUpdate(index);
                  }}
                  style={{ marginBottom: '1rem' }}
                >
                  CLICK TO UPDATE BG

                </Button>
                <Button
                  variant="contained"
                  href={AUTH_URL}
                  style={{ background: 'linear-gradient(115deg, rgba(217,237,146,1) 0%,
                  rgba(181,228,140,1) 10%,
                  rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%,
                  rgba(52,160,164,1) 50%,
                  rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%,
                   rgba(24,78,119,1) 90%)' }}
                >
                  LOGIN TO SPOTIFY

                </Button>
              </Grid>
            </div>
          )) : (
            <Grid container direction="column" justify="center" alignItems="center"
            style={{ width: '100vw', height: '100vh' }}>
              <Button
                variant="contained"
                onClick={() => {
                  onImageUpload();
                }}
                style={{ marginBottom: '1rem' }}
              >
                CLICK TO CHANGE BG

              </Button>
              <Button
                variant="contained"
                href={AUTH_URL}
                style={{ background: 'linear-gradient(115deg, rgba(217,237,146,1) 0%,
                rgba(181,228,140,1) 10%,
                rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%,
                 rgba(52,160,164,1)
                50%, rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%,
                rgba(24,78,119,1) 90%)' }}
              >
                LOGIN TO SPOTIFY

              </Button>
            </Grid>
          )} */}

        </MuiThemeProvider>
      )}
    </ImageUploading>
  );
};
