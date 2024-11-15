interface IMovies {
  name: string;
  image: string;
}

export function SquareCard({ name, image }: IMovies) {
  return (
    <button className=" flex w-[17rem] h-72 flex items-center justify-center  ">
      <h3 className="absolute w-[17rem] h-72 justify-center bg-black/50 rounded"></h3>
      <h3 className="absolute text-3xl w-48 flex justify-center text-center">
        {name}
      </h3>
      <img src={image} alt="" className="w-full h-full bg-black/50 rounded" />
    </button>
  );
}
