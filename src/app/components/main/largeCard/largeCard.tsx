import { AiFillHeart } from "react-icons/ai";

interface IMusics {
  name: string;
  song: string;
  image: string;
}

export function LargeCard({name, song, image}: IMusics) {
  return (
    <div className=" flex w-[22rem] h-72  flex items-center justify-center  ">
      <div>
        <img
          src={image}
          alt=""
          className="w-full h-full rounded"
        />
        <div className="flex justify-between mt-4">
        <div>
        <h3 className="">{song}</h3>
        <span className="text-gray-300">{name}</span>
        </div>

        <AiFillHeart className="text-3xl text-red-700" />
        </div>
      </div>
    </div>
  );
}
