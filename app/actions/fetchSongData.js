"use server";

export default async function fetchSongData(token) {
   const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${token}` },
   });

   const data = await response.json();
   return data;
   // console.log(data);
}
