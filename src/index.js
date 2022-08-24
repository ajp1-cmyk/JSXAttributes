import React from "react";
import ReactDOM from "react-dom";

// below img can be used as js expression and passed
//to src att of img to be used as att value

const img = "https://picsum.photos/200"; // + "?grayscale" this is what js can do
// it let u manipulate the image by changing url  string

ReactDOM.render(
  <div>
    <h1
      className="heading"
      spellCheck="true"
      contentEditable="false"
      draggable="true"
    >
      My favourite Games
    </h1>
    <div>
      <img src={img + "?grayscale"} alt="randomImage" />
    </div>
  </div>,
  document.getElementById("root")
);

// <ul>
// <li> Doom 2016 </li>
// <li> DMC V </li>
// <li> Uncharted 4 </li>
// </ul>
//{
/* <a href="https://en.wikipedia.org/wiki/Doom_(2016_video_game)">
<img
  className="games"
  src="https://images4.alphacoders.com/102/thumb-1920-1022369.jpg"
  alt="Doom 2016"
/>      
</a>

<img
className="games"
src="https://images7.alphacoders.com/515/thumb-1920-515386.jpg"
alt="Uncharted 4"
/>

<img
className="games"
src="https://c4.wallpaperflare.com/wallpaper/321/392/1005/halo-halo-infinite-e32019-xbox-xbox-one-hd-wallpaper-preview.jpg"
alt="Halo"
/>
<br></br>
<br></br> */
//}
