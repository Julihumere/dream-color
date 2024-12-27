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
import { Button } from "./components/ui/button";
import { Bookmark } from "lucide-react";
import { useColors } from "./context/ColorsContext";
import { Label } from "@radix-ui/react-label";
import { Input } from "./components/ui/input";
import { useToast } from "./hooks/use-toast";

function App() {
  const [color, setColor] = useState("#FF0934");
  const [name, setName] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");
  const { theme } = useTheme();
  const { toast } = useToast();
  const { saveColor } = useColors();

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
        <Label className="flex items-center">
          <Input
            className="w-56 border-[0.5px] mr-2 text-black dark:text-white dark:placeholder:text-white"
            placeholder="Nombre del color"
            style={{ borderColor: secondaryColor }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Button
            onClick={() => addColor(lightScale, darkScale, secondaryColor)}
            style={{
              backgroundColor: theme === "light" ? lightScale[7] : darkScale[0],
              color: secondaryColor,
            }}
          >
            <Bookmark />
            Guardar
          </Button>
        </Label>
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
      <Toaster color={color} />
    </main>
  );
}

export default App;
