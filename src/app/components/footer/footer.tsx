export function Footer() {
  return (
    <div className="mt-32 h-44 bg-gray-800">
      <div className="m-0 m-auto max-w-6xl">
        <div className="flex items-center p-6 flex justify-center text-white text-3xl gap-1">
          <img src="./logo.png" alt="" className="w-8" />
          <h1 className="text-xl">Music App</h1>
        </div>
        <div className="flex justify-center text-white gap-4 text-sm">
          <span>terms and privacy</span>
          <span>Send us feedback</span>
          <span>help</span>
          <p>1990-2024, musics.com.inc or its affiliaties</p>
        </div>
      </div>
    </div>
  );
}
