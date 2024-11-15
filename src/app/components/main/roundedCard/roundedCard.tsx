interface IMovies {
  name: string;
  image: string;
}

export function RoundedCard({ name, image }: IMovies) {
  return (
    <div className=" flex w-40 h-40 flex items-center justify-center mt-8">
      <button>
        <img
          src={image}
          alt=""
          className="w-full h-full bg-black/50 rounded-full"
        />
        <h3 className="flex items-center justify-center mt-2 text-sm">
          {name}
        </h3>
      </button>
    </div>
  );
}
