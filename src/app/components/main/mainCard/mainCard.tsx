import { GiSoundWaves } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";

interface IMusics {
  name: string;
  song: string;
  image: string;
}

export function MainCard({ image, name, song }: IMusics) {
  return (
    <div className="flex justify-center mb-8">
      <GiSoundWaves className="text-9xl flex mt-20 mr-4 " />
      <div className=" flex border-2 border-purple-900 h-80 w-[40rem] rounded">
        <img
          src={image}
          alt=""
          className=" z-10 object-none w-full h-full rounded"
        />

        <h3 className="absolute z-20 w-40 text-base flex justify-center text-center mt-8 ml-2">
          | {song}
        </h3>
        <h3 className="absolute z-20 text-pink-700 w-40 text-base flex justify-center text-center mt-14 ml-2">
          {name} |
        </h3>
        <button className="absolute  mt-64 z-20 h-10 w-40 ml-4 flex bg-red-400 rounded-full flex items-center justify-center gap-2">
          <h2>Listen Now</h2>
          <a href="">
            <AiFillPlayCircle />
          </a>
        </button>
      </div>
      <GiSoundWaves className="text-9xl flex mt-20 ml-4" />
    </div>
  );
}
