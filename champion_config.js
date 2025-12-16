//https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=870

const championimage = document.getElementById("champion-image");
const championname = document.getElementById("champion-name");
const championtitle = document.getElementById("champion-title");

const akali = {
  name: "Akali",
  title: "The Rogue Assassin",
  image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=870",
}
const yasuo = {
  name: "Yasuo",
  title: "The Unforgiven",
  image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=870",
}
const lux = {
  name: "Lux",
  title: "The Lady of Luminosity",
  image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=870",
}
const jinx = {
  name: "Jinx",
  title: "The loose cannon",
  image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=635",
}
const thresh = {
  name: "Thresh",
  title: "The Chain Warden",
  image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=870",
}
const leona = {
  name: "Leona",
  title: "The Radiant Dawn",
  image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=870",
}
function akaliactivate() {
  championimage.src = akali.image;
  championname.textContent = akali.name;
  championtitle.textContent = akali.title;

}
function yasuoactivate() {
  championimage.src = yasuo.image;
  championname.textContent = yasuo.name;
  championtitle.textContent = yasuo.title;
}
function luxactivate() {
  championimage.src = lux.image;
  championname.textContent = lux.name;
  championtitle.textContent = lux.title;
}
function jinxactivate() {
  championimage.src = jinx.image;
  championname.textContent = jinx.name;
  championtitle.textContent = jinx.title;
}
function threshactivate() {
  championimage.src = thresh.image;
  championname.textContent = thresh.name;
  championtitle.textContent = thresh.title;
}
function leonaactivate() {
  championimage.src = leona.image;
  championname.textContent = leona.name;
  championtitle.textContent = leona.title;
}



//Multiple ways to play part

const rift = {
  video_id: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4?accountingTag=league_of_legends_website",
  title: "The most popular game mode",
  sub_title: "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours."
}
const aram = {
  video_id: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4?accountingTag=league_of_legends_website",
  title: "No mercy, pure chaos!",
  sub_title: "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode."
}
const tft = {
  video_id: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4?accountingTag=league_of_legends_website",
  title: "Teamfight Tactics",
  sub_title: "Choose your own strategy and outwit seven of your opponents and become the last person standing in this strategic game mode."
}
function rift_active() {

}
function aram_active() {

}
function tft_active() {
}