import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectorColor from "./components/SelectorColor";
import chroma from "chroma-js";
import Pallete from "./components/Pallete";
import Items from "./components/Items";

function App() {
  const [color, setColor] = useState("#FF0934");

  const lightScale = chroma.scale(["white", color]).colors(6).slice(0, 5);
  const darkScale = chroma.scale([color, "black"]).colors(5).slice(1, 5);

  return (
    <main className="w-screen h-screen flex flex-col items-center bg-white dark:bg-black">
      <Header />
      <SelectorColor color={color} setColor={setColor} />
      <Pallete lightScale={lightScale} darkScale={darkScale} color={color} />
      <Items color={color} />
    </main>
  );
}

export default App;
