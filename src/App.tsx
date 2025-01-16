import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SelectorColor from "./components/SelectorColor";
import chroma from "chroma-js";
import Pallete from "./components/Pallete";
import Items from "./components/Items";
import { useTheme } from "./context/ThemeContext";
import { Toaster } from "./components/ui/toaster";
import SavedColors from "./components/SavedColors";
import { useColors } from "./context/ColorsContext";
import { useToast } from "./hooks/use-toast";
import Footer from "./components/Footer";
import ActionsButtons from "./components/ActionsButtons";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function App() {
  const [color, setColor] = useState("#FF0934");
  const [name, setName] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");
  const [showConfetti, setShowConfetti] = useState(false);
  // Hooks
  const { theme } = useTheme();
  const { toast } = useToast();
  const { saveColor } = useColors();

  const { width, height } = useWindowSize();

  const lightScale = chroma.scale(["white", color]).colors(11).slice(1, 10);
  const darkScale = chroma.scale([color, "black"]).colors(10).slice(0, 9);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--color-start", darkScale[7]);
      document.documentElement.style.setProperty("--color-end", darkScale[5]);
    } else {
      document.documentElement.style.setProperty(
        "--color-start",
        lightScale[3]
      );
      document.documentElement.style.setProperty("--color-end", lightScale[5]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, theme]);

  const addColor = (
    light: string[],
    dark: string[],
    secondaryColor: string
  ) => {
    if (name === "") {
      toast({
        title: "Nombre vacío",
        description: "Por favor, añade un nombre al color",
      });
      return;
    }
    saveColor(light, dark, name, secondaryColor);
    toast({
      title: "Color guardado",
      description: `El color ${name} ha sido guardado`,
    });
    setName("");
    return;
  };

  const changeColorLibrary = (primary: string, secondary: string) => {
    if (primary === "" || secondary === "") {
      setColor("#FF0934");
      setSecondaryColor("#FFFFFF");
    } else {
      setColor(primary);
      setSecondaryColor(secondary);
    }
  };

  return (
    <main
      style={{
        background: `linear-gradient(to bottom, ${
          theme == "light" ? lightScale[6] : darkScale[4]
        } 15%, ${theme === "light" ? "#fff" : "#111"}) 85%`,
      }}
      className="w-full flex flex-col items-center bg-white dark:bg-black"
    >
      <Header />
      <SelectorColor
        color={color}
        setColor={setColor}
        secondaryColor={secondaryColor}
        setSecondaryColor={setSecondaryColor}
      />
      <div className="w-full flex flex-col mb-10 justify-center items-center">
        <Pallete lightScale={lightScale} darkScale={darkScale} color={color} />
        <ActionsButtons
          secondaryColor={secondaryColor}
          lightScale={lightScale}
          darkScale={darkScale}
          setName={setName}
          name={name}
          addColor={addColor}
          setShowConfetti={setShowConfetti}
        />
      </div>
      <div className="w-full min-h-[80vh] flex justify-evenly items-start">
        <Items
          color={color}
          light={lightScale}
          dark={darkScale}
          theme={theme}
          secondaryColor={secondaryColor}
        />
        <SavedColors
          theme={theme}
          secondaryColor={secondaryColor}
          changeColorLibrary={changeColorLibrary}
        />
      </div>
      <div
        className="w-full fixed z-20 bottom-0"
        style={{ backgroundColor: color }}
      >
        <Footer fontColor={secondaryColor} />
      </div>
      <Toaster color={color} />
      {showConfetti && (
        <Confetti
          width={width - 20}
          height={height}
          colors={[...lightScale, ...darkScale]}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
    </main>
  );
}

export default App;
