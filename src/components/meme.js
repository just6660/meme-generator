import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeObject, setMemeObject] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMemeObject((prevState) => ({
      ...prevState,
      randomImage: allMemes[randomNumber].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeObject((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={memeObject.topText}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={memeObject.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={memeObject.randomImage} className="meme--image"></img>
        <h2 className="meme--text top">{memeObject.topText}</h2>
        <h2 className="meme--text bottom">{memeObject.bottomText}</h2>
      </div>
    </main>
  );
}
