import { SiYoutubemusic } from "react-icons/si";

export function Footer() {
  return (
    <div className="mt-32 h-44 bg-gray-800">
      <div className="m-0 m-auto max-w-6xl">
        <h1 className="pt-10 pb-4 flex justify-center text-white text-3xl gap-1">
        <SiYoutubemusic /> Raatzfy
        </h1>
        <div className="flex justify-center text-white gap-4 text-sm">
          <span>terms and privacy</span>
          <span>Send us feedback</span>
          <span>help</span>
          <p>1996-2023, musics.com,inc. or its affiliaties</p>
        </div>
      </div>
    </div>
  );
}