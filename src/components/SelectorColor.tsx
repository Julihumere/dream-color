import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
import { useLocation } from "wouter";
export type SelectorColorProps = {
  color: string;
  setColor: (color: string) => void;
  secondaryColor: string;
  setSecondaryColor: (secondaryColor: string) => void;
};

export default function SelectorColor({
  color,
  setColor,
  secondaryColor,
  setSecondaryColor,
}: SelectorColorProps) {
  const { theme } = useTheme();
  const [, setLocation] = useLocation();

  const updateQueryString = (
    newColor?: string,
    newFont?: string,
    newTheme?: string
  ) => {
    const queryString = new URLSearchParams();

    // Agregar parámetros en el orden correcto
    if (newColor) queryString.set("color", `#${newColor.slice(1, 8)}`);
    else if (color) queryString.set("color", `#${color.slice(1, 8)}`);

    if (newFont) queryString.set("font", `#${newFont.slice(1, 8)}`);
    else if (secondaryColor)
      queryString.set("font", `#${secondaryColor.slice(1, 8)}`);

    if (newTheme) queryString.set("theme", newTheme);
    else if (theme) queryString.set("theme", theme);

    setLocation(`?${queryString.toString()}`);
  };

  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search);
    const colorParam = queryString.get("color");
    const fontParam = queryString.get("font");

    if (colorParam) setColor(colorParam);
    if (fontParam) setSecondaryColor(fontParam);
  }, []);

  // Efecto para actualizar el query string al cambiar el theme
  useEffect(() => {
    updateQueryString(undefined, undefined, theme);
  }, [theme]);

  const handleChangePrimary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    updateQueryString(newColor, undefined, undefined);
  };

  const handleChangeSecondary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFont = e.target.value;
    setSecondaryColor(newFont);
    updateQueryString(undefined, newFont, undefined);
  };

  return (
    <div className="w-[80%] flex justify-evenly items-center">
      <div className="flex flex-col items-start ">
        <h2 className="text-black py-2 px-1 dark:text-white font-bold tracking-widest">
          Primario
        </h2>
        <label className="border-2 border-[#dedede] rounded-md w-[280px] flex items-center justify-evenly py-2">
          <input
            type="color"
            onChange={(e) => handleChangePrimary(e)}
            value={color}
          />
          <input
            className="w-3/4 py-1 outline-none bg-transparent text-black dark:text-white"
            type="text"
            value={color}
            onChange={(e) => handleChangePrimary(e)}
            placeholder="#FF0980"
          />
        </label>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-black py-2 px-1 dark:text-white font-bold tracking-widest">
          Secundario
        </h2>
        <label className="border-2 border-[#dedede] rounded-md w-[280px] flex items-center justify-evenly py-2">
          <input
            type="color"
            onChange={(e) => handleChangeSecondary(e)}
            value={secondaryColor}
          />
          <input
            className="w-3/4 py-1 outline-none bg-transparent text-black dark:text-white"
            type="text"
            value={secondaryColor}
            onChange={(e) => handleChangeSecondary(e)}
            placeholder="#FF0980"
          />
        </label>
      </div>
    </div>
  );
}
