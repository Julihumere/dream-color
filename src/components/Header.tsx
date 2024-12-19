import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const changeTheme = (theme: string) => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return (
    <header className="h-48 flex flex-col justify-evenly items-center">
      <h1 className="text-5xl text-dark dark:text-white">
        ! Crea tu paleta de colores !
      </h1>
      <div>
        <Button onClick={() => changeTheme("light")}>
          <Sun /> Claro
        </Button>
        <Button onClick={() => changeTheme("dark")}>
          <Moon /> Oscuro
        </Button>
      </div>
    </header>
  );
}
