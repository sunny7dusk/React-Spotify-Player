import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

interface Props{
    accessToken: string,
    trackUri: string|undefined|string[],
    playing: React.Dispatch<React.SetStateAction<boolean>>,
}
export const Player:React.FC<Props> = ({ accessToken, trackUri, playing }:Props) => {
  const [play, setPlay] = useState(false);
  useEffect(() => { setPlay(true); }, [trackUri]);
  if (!accessToken) return null;
  // if (trackUri === undefined) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri || []}
      callback={(state) => {
        if (!state.isPlaying) {
          setPlay(false);
          playing(false);
        } else {
          setPlay(true);
          playing(true);
        }
      }}
      play={play}
      styles={{
        height: '6vh', bgColor: '#ffffff00', color: '#ffffff', trackNameColor: '#ffffff',
      }}
      initialVolume={10}
    />
  );
  // if (trackUri.length > 1) {
  //   return (
  //     <SpotifyPlayer
  //       token={accessToken}
  //       showSaveIcon
  //       uris={trackUri || []}
  //       callback={(state) => {
  //         if (!state.isPlaying) {
  //           setPlay(false);
  //           playing(false);
  //         }
  //       }}
  //       play={play}
  //       styles={{ height: '6vh', bgColor: '#222222', color: '#ffffff' }}
  //       initialVolume={50}
  //     />
  //   );
  // }
  // return (
  //   <SpotifyPlayer
  //     token={accessToken}
  //     showSaveIcon
  //     uris={trackUri ? [trackUri] : []}
  //     callback={(state) => {
  //       if (!state.isPlaying) {
  //         setPlay(false);
  //         playing(false);
  //       }
  //     }}
  //     play={play}
  //     styles={{ height: '6vh', bgColor: '#222222', color: '#ffffff' }}
  //     initialVolume={50}
  //   />
  // );
};
