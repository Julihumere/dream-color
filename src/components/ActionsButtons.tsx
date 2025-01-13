import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Bookmark, Share2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { clipboard } from "@/utils/clipboard";

type Props = {
  secondaryColor: string;
  lightScale: string[];
  darkScale: string[];
  setName: (name: string) => void;
  name: string;
  addColor: (light: string[], dark: string[], secondaryColor: string) => void;
};

export default function ActionsButtons({
  secondaryColor,
  lightScale,
  darkScale,
  setName,
  name,
  addColor,
}: Props) {
  const { theme } = useTheme();
  const queryString = window.location.href;

  return (
    <main className="w-full flex flex-col mb-10 justify-center items-center">
      <Label className="flex items-center">
        <Input
          className="w-56 border-[0.5px] mr-2 text-black dark:text-white dark:placeholder:text-white placeholder:text-black"
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

      <h1 className="flex items-center justify-center text-lg font-bold py-4">
        Comparte el link magico para que todos tengan tu paleta de colores:{" "}
        <Button
          onClick={() => clipboard(queryString.toString())}
          className="ml-2 mt-1"
          style={{
            backgroundColor: theme === "light" ? lightScale[7] : darkScale[0],
            color: secondaryColor,
          }}
        >
          <Share2 />
          Compartir
        </Button>
      </h1>
    </main>
  );
}
