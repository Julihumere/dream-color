import { useColors } from "@/context/ColorsContext";
import { useToast } from "@/hooks/use-toast";
import { Check, Trash2 } from "lucide-react";

type SavedColorProps = {
  theme: string;
  secondaryColor: string;
  changeColorLibrary: (primary: string, secondary: string) => void;
};

export default function SavedColors({
  theme,
  changeColorLibrary,
}: SavedColorProps) {
  const { colors, deleteColor } = useColors();
  const { toast } = useToast();

  const handleDeleteColor = (id: string, name: string) => {
    deleteColor(id);
    toast({
      title: "Color eliminado",
      description: `El color ${name} ha sido eliminado correctamente`,
    });
  };

  const handleSelectColor = (primary: string, secondary: string) => {
    changeColorLibrary(primary, secondary);
  };

  return (
    <div className="w-[40%] min-h-[80vh] flex flex-col justify-start items-center mb-20">
      <h1 className="w-[100%] text-3xl font-medium text-center mb-5 border-b-2 border-gray-500 pb-2 rounded-lg text-black dark:text-white">
        Colores guardados
      </h1>
      {colors.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {colors.map((color) => (
            <div className="flex flex-col w-full items-startjustify-center">
              <header className="flex justify-between items-center w-full">
                <h2
                  style={{ color: theme == "light" ? "black" : "white" }}
                  className="ml-1 text-2xl text-white"
                >
                  {color.name}
                </h2>
                <section className="w-14 flex justify-between items-center">
                  <Check
                    onClick={() =>
                      handleSelectColor(color.color[9], color.secondaryColor)
                    }
                    className="cursor-pointer"
                    color={theme == "light" ? "black" : "white"}
                  />
                  <Trash2
                    onClick={() => handleDeleteColor(color.id, color.name)}
                    className="cursor-pointer"
                    color={theme == "light" ? "black" : "white"}
                  />
                </section>
              </header>
              <div className="w-ful py-3 flex flex-wrap justify-center items-center">
                {color.color.map((c, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
                    style={{ backgroundColor: c }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-center text-black dark:text-white">
          No hay colores guardados
        </p>
      )}
    </div>
  );
}
