import { useEffect, useState } from "react";

import { SiSpotify } from "react-icons/si";
import { PlayingContainer } from "./styles";

type NowPlayingProps = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export function NowPlaying() {
  const [song, setSong] = useState<NowPlayingProps>();

  async function getData() {
    const response = await fetch("/api/now-play");
    const data: NowPlayingProps = await response.json();
    setSong(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <PlayingContainer>
      <div>
        <SiSpotify size={22} />

        {song?.songUrl ? (
          <>
            <a href={song.songUrl}>
              <b>{song.title}</b> - {song.artist}
            </a>
          </>
        ) : (
          <>
            <span>
              <b>Not Playing</b> - Spotify
            </span>
          </>
        )}
      </div>
    </PlayingContainer>
  );
}
