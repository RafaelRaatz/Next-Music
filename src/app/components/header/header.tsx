import { SiYoutubemusic } from "react-icons/si";
import { AiOutlineSearch, AiOutlineHome, AiOutlineStar, AiOutlineHistory } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsMusicNoteList } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="h-24 bg-gray-800">
      <div className="max-w-6xl m-auto pt-8 flex flex-row justify-between items-center">
        <div className="flex items-center text-white gap-2">
          <SiYoutubemusic className="text-3xl" />
          <h1 className="text-3xl">RAATZFY</h1>
        </div>

        <div className="flex gap-4 text-white text-sm ">
          <a className="hover:scale-105 hover:underline flex" href="">
            <AiOutlineHome className="mt-0.5 mr-1.5" /> Home
          </a>
          |
          <a className="hover:scale-105 hover:underline flex" href="">
          <BsMusicNoteList className="mt-0.5 mr-1.5" />Playlist
          </a>
          |
          <a className="hover:scale-105 hover:underline flex" href="">
          <AiOutlineStar className="mt-0.5 mr-1.5" /> Favorite
          </a>
          |
          <a className="hover:scale-105 hover:underline flex" href="">
          <AiOutlineHistory className="mt-0.5 mr-1.5"/> History
          </a>
        </div>

        <div className="flex gap-4">
          <input
            className="h-7 w-60 rounded-full bg-gray-400/50 text-center"
            type="text"
            placeholder="search"
          />
          <AiOutlineSearch className="absolute mt-1.5 ml-2 text-gray-500" />
          <div className="flex gap-1">
            <img className="w-6 rounded-full" src="/usa.svg" alt="" />
            <IoIosArrowDown className="text-white mt-1" />
          </div>
          <button className="h-7 w-16 text-xs rounded-full bg-pink-700 text-white">
            login
          </button>
        </div>
      </div>
    </div>
  );
};
