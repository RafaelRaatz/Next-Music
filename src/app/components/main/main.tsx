"use client";
import { useEffect, useState } from "react";
import { LargeCard } from "./largeCard";
import { MainCard } from "./mainCard";
import { RoundedCard } from "./roundedCard";
import { SquareCard } from "./squareCard";
import { apiArtist, apiMatue, apiPlaylist } from "@/app/services/api";

export function Main() {
  const [musics, setMusics] = useState<any[]>([]);
  const [musicsArtist, setMusicsArtist] = useState<any[]>([]);
  const [Artist, setArtist] = useState<any[]>([]);
  const [visible, setVisible] = useState(5);
  const [visibleArtist, setVisibleArtist] = useState(8);
  const [visibleMain, setVisibleMain] = useState(2);
  const [visibleArtistMusic, setVisibleArtistMusic] = useState(3);

  const getMusics = async () => {
    try {
      const response = await apiPlaylist;
      const data = response.data;
      setMusics(data.tracks.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMusicsArtist = async () => {
    try {
      const response = await apiMatue;
      const data = response.data;
      setMusicsArtist(data.tracks.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getArtist = async () => {
    try {
      const response = await apiArtist;
      const data = response.data;
      console.log(data);
      setArtist(data.tracks.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMusics();
    getMusicsArtist();
    getArtist();
  }, []);

  return (
    <div className="m-auto flex max-w-6xl flex-col mt-20 text-white">
      {musicsArtist.slice(1, visibleMain).map((music, key) => (
        <MainCard
          key={key}
          name={music.artist.name}
          song={music.title}
          image={music.album.cover_xl}
        />
      ))}

      <div className="mt-14 bg-gray-800 rounded-lg h-[32rem]">
        <div className="h-28 mt-4 ml-8">
          <h1 className=" flex text-2xl">New Songs</h1>
        </div>

        <div className="flex gap-4 ml-6">
          {Artist.slice(0, visibleArtistMusic).map((music, key) => (
            <LargeCard
              key={key}
              name={music.artist.name}
              song={music.title}
              image={music.album.cover_xl}
            />
          ))}
        </div>
      </div>
      <h1 className="mt-14 text-2xl">Top Musics</h1>

      <div className="flex gap-4 mt-4  ">
        {musics.slice(1, visible).map((music, key) => (
          <SquareCard
            key={key}
            name={music.title}
            image={music.album.cover_xl}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-16 bg-gray-800 h-56 rounded-lg ">
        <div className="w-64 bg-gray-800 flex items-center justify-center rounded-lg border-r-4 border-pink-800">
          <h1 className="text-5xl ml-8">
            Top Trending <span className="text-pink-800">Artists</span>{" "}
          </h1>
        </div>
        {Artist.slice(3, visibleArtist).map((music, key) => (
          <RoundedCard
            key={key}
            name={music.artist.name}
            image={music.album.cover_xl}
          />
        ))}
      </div>

      <h1 className="mt-14 text-2xl">O melhor de Matuê</h1>

      <div className="flex gap-4 mt-4  ">
        {musicsArtist.slice(1, visible).map((music, key) => (
          <SquareCard
            key={key}
            name={music.title}
            image={music.album.cover_xl}
          />
        ))}
      </div>
    </div>
  );
}
