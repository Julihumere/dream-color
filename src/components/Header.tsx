import { useTheme } from "@/context/ThemeContext";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-48 flex justify-evenly items-center">
      <div className="absolute left-0 top-0 p-8 flex items-center">
        <img
          src="/favicon.svg"
          alt="Logo 'Dream color'"
          className="w-12 h-12"
        />
        <h3
          className="text-2xl font-bold ml-2"
          style={{ color: theme == "light" ? "black" : "white" }}
        >
          Dream Color
        </h3>
      </div>
      <h1 className="title-page">! Crea tu paleta de colores !</h1>

      <div className="absolute right-0 top-0 p-8">
        {theme == "light" ? (
          <Button
            className="dark:bg-transparent shadow-none dark:hover:bg-transparent"
            onClick={() => toggleTheme()}
          >
            <Sun color="black" size={48} />
          </Button>
        ) : (
          <Button
            className="dark:bg-transparent shadow-none dark:hover:bg-transparent"
            onClick={() => toggleTheme()}
          >
            <Moon color="white" size={48} />
          </Button>
        )}
      </div>
    </header>
  );
}
