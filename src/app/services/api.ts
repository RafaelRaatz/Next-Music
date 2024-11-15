import axios from "axios";

export const api = axios({
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/artist/3",
  headers: {
    "X-RapidAPI-Key": "0d04424f09msh5a41373871c5ac2p185de5jsn865bf2268d94",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const apiMatue = axios({
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/6728985404",
  headers: {
    "X-RapidAPI-Key": "0d04424f09msh5a41373871c5ac2p185de5jsn865bf2268d94",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const apiPlaylist = axios({
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/11335397984",
  headers: {
    "X-RapidAPI-Key": "0d04424f09msh5a41373871c5ac2p185de5jsn865bf2268d94",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const apiArtist = axios({
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/9379655642",
  headers: {
    "X-RapidAPI-Key": "0d04424f09msh5a41373871c5ac2p185de5jsn865bf2268d94",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});
