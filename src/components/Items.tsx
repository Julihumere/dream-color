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

  return (
    <div className="w-[40%] min-h-[80vh] flex flex-col justify-start items-center mb-20">
      <h1 className="w-[100%] text-3xl font-medium text-center mb-5 border-b-2 border-gray-500 pb-2 rounded-lg text-black dark:text-white">
        Previsualización de componentes
      </h1>
      <section className="w-[100%] grid grid-cols-2 gap-4">
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
              className={`mr-2 outline-none text-black dark:text-white`}
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
            className="w-[350px] bg-[var(--color-card)] dark:bg-[var(--color-card)]"
            style={{ "--color-card": cardTheme }}
          >
            <CardHeader>
              <CardTitle style={{ color: secondaryColor }}>
                Create project
              </CardTitle>
              <CardDescription style={{ color: secondaryColor }}>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent
                        className="bg-[var(--color-card)] dark:bg-[var(--color-card)]"
                        style={{ "--color-card": cardTheme }}
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
                variant="outline"
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
