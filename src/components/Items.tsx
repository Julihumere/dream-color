import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  color: string;
  light: string[];
  dark: string[];
  theme: string;
  secondaryColor: string;
};

export default function Items({ light, dark, theme, secondaryColor }: Props) {
  const colorTheme = theme === "light" ? light[6] : dark[0];

  const cardTheme = theme === "light" ? light[3] : dark[6];

  const [viewBeta, setViewBeta] = useState(false);

  const handleViewBeta = () => {
    setViewBeta(false);
    localStorage.setItem("beta", "false");
  };

  useEffect(() => {
    const beta = localStorage.getItem("beta");
    if (beta === "false") {
      setViewBeta(false);
    } else {
      setViewBeta(true);
    }
  }, []);

  return (
    <div className="w-[40%] min-h-[80vh] flex flex-col justify-start items-center mb-20">
      <h1 className="w-[100%] text-3xl font-medium text-center mb-5 border-b-2 border-gray-500 pb-2 rounded-lg text-black dark:text-white">
        Previsualización de componentes
      </h1>
      <section className="relative w-[100%] grid grid-cols-2 gap-4 px-5 py-3">
        {viewBeta && (
          <section
            style={{
              backgroundColor: colorTheme,
              opacity: 0.85,
              backdropFilter: "blur(500px)",
            }}
            className="absolute top-0 left-0 w-full min-h-[70vh] z-10 inset-0 rounded-md flex items-center justify-center overflow-hidden"
          >
            <div className="text-center">
              <h1
                style={{ backgroundColor: cardTheme }}
                className="text-7xl font-bold text-white mb-4 absolute top-20 -left-32 w-[500px] -rotate-45"
              >
                Beta
              </h1>
              <Button
                onClick={() => handleViewBeta()}
                style={{
                  backgroundColor: theme === "light" ? light[4] : dark[4],
                  color: secondaryColor,
                }}
              >
                Desbloquear
              </Button>
            </div>
          </section>
        )}
        {/* Botones */}
        <div className="h-36 flex flex-wrap justify-between items-start">
          <div className="w-full h-full flex flex-wrap items-center justify-around">
            <Button
              className="dark:text-white"
              style={{
                backgroundColor: theme === "light" ? light[7] : dark[0],
                color: secondaryColor,
              }}
            >
              Aceptar
            </Button>
            <Button
              className="dark:text-white"
              style={{
                backgroundColor: theme === "light" ? light[5] : dark[2],
                color: secondaryColor,
              }}
            >
              Enviar
            </Button>
            <Button
              className="dark:text-white"
              style={{
                backgroundColor: theme === "light" ? light[4] : dark[4],
                color: secondaryColor,
              }}
            >
              Agregar
            </Button>
            <Button
              className="dark:text-white"
              style={{
                backgroundColor: theme === "light" ? light[2] : dark[6],
                color: secondaryColor,
              }}
            >
              Compartir
            </Button>
          </div>
        </div>
        {/* Checks */}
        <div className="h-36 flex flex-col justify-between items-start">
          <div className="h-full flex items-center justify-around flex-col w-full">
            <Label
              className="flex items-center"
              style={{ color: secondaryColor }}
            >
              <Checkbox
                checked
                style={{ "--color": colorTheme, "--border": colorTheme }}
                className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] border-[var(--border)] rounded-sm mr-2"
              />
              Aceptar terminos y condiciones
            </Label>
            <Label
              className="flex items-center"
              style={{ color: secondaryColor }}
            >
              <Checkbox
                checked
                style={{ "--color": colorTheme, "--border": colorTheme }}
                className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] border-[var(--border)] rounded-sm mr-2"
              />
              Aceptar terminos y condiciones
            </Label>
            <Label
              className="flex items-center"
              style={{ color: secondaryColor }}
            >
              <Checkbox
                style={{ "--color": colorTheme, "--border": colorTheme }}
                className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] border-[var(--border)] rounded-sm mr-2"
              />
              Aceptar terminos y condiciones
            </Label>
            <Label
              className="flex items-center"
              style={{ color: secondaryColor }}
            >
              <Checkbox
                style={{ "--color": colorTheme, "--border": colorTheme }}
                className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] border-[var(--border)] rounded-sm mr-2"
              />
              Aceptar terminos y condiciones
            </Label>
          </div>
        </div>
        {/* Search */}
        <div className="h-36 flex justify-between items-start">
          <div className="w-full h-full flex items-center justify-around">
            <Input
              className={`mr-2 outline-none text-black dark:text-white dark:placeholder:text-white `}
              placeholder="Buscar..."
              style={{
                borderColor: theme == "light" ? dark[3] : "#5e5e5e",
              }}
            />
            <Button
              className="dark:text-white"
              style={{
                backgroundColor: theme === "light" ? light[5] : dark[0],
                color: secondaryColor,
              }}
            >
              Buscar
            </Button>
          </div>
        </div>
        {/* Toggle */}
        <div className="h-36 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4">
            <Switch
              style={{
                "--color": colorTheme,
                "--border": colorTheme,
                backgroundColor: colorTheme,
              }}
              className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] border-[var(--border)] mr-2"
              checked
            ></Switch>
            <Switch
              className="data-[state=checked]:bg-[var(--color)] data-[state=unchecked]:bg-[#fff] data-[state=checked]:border-[var(--border)] mr-2"
              style={{
                "--color": colorTheme,
                "--border": colorTheme,
                backgroundColor: colorTheme,
              }}
              checked
            ></Switch>
            <Switch
              className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] mr-2"
              style={{
                "--color": colorTheme,
                "--border": colorTheme,
                backgroundColor: colorTheme,
              }}
              checked
            ></Switch>
            <Switch
              className="data-[state=checked]:bg-[var(--color)] data-[state=unchecked]:bg-[#ffffff] data-[state=checked]:border-[var(--border)] mr-2"
              style={{
                "--color": colorTheme,
                "--border": colorTheme,
              }}
            ></Switch>
            <Switch
              className="data-[state=checked]:bg-[var(--color)] data-[state=unchecked]:bg-[#ffffff] data-[state=checked]:border-[var(--border)] mr-2"
              style={{
                "--color": colorTheme,
                "--border": colorTheme,
              }}
            ></Switch>
          </div>
        </div>
        {/* Cards */}
        <div className="flex h-56 items-start">
          <Card
            className="w-[350px] bg-[var(--color-card)] dark:bg-[var(--color-card)] border-none"
            style={{ "--color-card": cardTheme }}
          >
            <CardHeader>
              <CardTitle
                style={{ color: theme === "light" ? light[8] : "white" }}
              >
                Create project
              </CardTitle>
              <CardDescription
                style={{ color: theme === "light" ? light[8] : "gray" }}
              >
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label
                      htmlFor="name"
                      style={{ color: theme === "light" ? light[8] : dark[2] }}
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      className="dark:placeholder:text-white"
                      style={{
                        border: `1px solid ${
                          theme === "light" ? light[8] : dark[5]
                        }`,
                      }}
                      placeholder="Name of your project"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label
                      htmlFor="framework"
                      style={{ color: theme === "light" ? light[8] : dark[2] }}
                    >
                      Framework
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="framework"
                        style={{
                          border: `1px solid ${
                            theme === "light" ? light[8] : dark[5]
                          }`,
                        }}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent
                        className="bg-[var(--color-card)] dark:bg-[var(--color-card)]"
                        style={{
                          "--color-card": cardTheme,
                          border: `1px solid ${
                            theme === "light" ? light[8] : dark[5]
                          }`,
                        }}
                        position="popper"
                      >
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                style={{
                  backgroundColor: theme === "light" ? light[5] : dark[4],
                  color: secondaryColor,
                }}
              >
                Cancel
              </Button>
              <Button
                style={{
                  backgroundColor: theme === "light" ? light[7] : dark[0],
                  color: secondaryColor,
                }}
              >
                Deploy
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
