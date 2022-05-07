import React from "react";
import trollFace from "../images/Troll Face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} className="header--img"></img>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Generate Your Own Memes</h4>
    </header>
  );
}
