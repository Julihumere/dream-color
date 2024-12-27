import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface Color {
  id: string;
  name: string;
  color: string[];
  secondaryColor: string;
}

interface ColorsContextType {
  colors: Color[];
  saveColor: (
    light: string[],
    dark: string[],
    name: string,
    secondaryColor: string
  ) => void;
  deleteColor: (id: string) => void;
  colorsSelected: ColorSelected;
  selectedColor: (primary: string, secondary: string) => void;
}

interface ColorSelected {
  primary: string;
  secondary: string;
}

const ColorsContext = createContext<ColorsContextType>({
  colors: [],
  saveColor: () => {},
  deleteColor: () => {},
  colorsSelected: { primary: "", secondary: "" },
  selectedColor: () => {},
});

export const ColorsProvider = ({ children }: { children: ReactNode }) => {
  const [colors, setColors] = useState<Color[]>([]);
  const [colorsSelected, setColorsSelected] = useState<ColorSelected>({
    primary: "",
    secondary: "",
  });

  const saveColor = (
    light: string[],
    dark: string[],
    name: string,
    secondaryColor: string
  ) => {
    console.log("Guardando color");

    const concatColors = [...light, ...dark];

    const newColor = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      color: concatColors,
      secondaryColor: secondaryColor,
    };

    setColors((prevColors) => [...prevColors, newColor]);

    const colorsLocalStorage = localStorage.getItem("colors");

    if (!colorsLocalStorage) {
      localStorage.setItem("colors", JSON.stringify([newColor]));
    } else {
      const colorsParsed = JSON.parse(colorsLocalStorage);
      localStorage.setItem(
        "colors",
        JSON.stringify([...colorsParsed, newColor])
      );
    }
  };

  const deleteColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
    localStorage.setItem("colors", JSON.stringify(newColors));
  };

  const selectedColor = (primary: string, secondary: string) => {
    if (colorsSelected.primary == "" || colorsSelected.secondary == "") {
      setColorsSelected({ primary: "#FF0934", secondary: "#FFFFFF" });
    } else {
      setColorsSelected({ primary, secondary });
    }
  };

  useEffect(() => {
    const colorsLocalStorage = localStorage.getItem("colors");

    if (colorsLocalStorage) {
      const colorsParsed = JSON.parse(colorsLocalStorage);
      console.log(colorsParsed);

      setColors(colorsParsed);
    }
  }, []);

  return (
    <ColorsContext.Provider
      value={{ colors, saveColor, deleteColor, colorsSelected, selectedColor }}
    >
      {children}
    </ColorsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useColors = () => {
  return useContext(ColorsContext);
};
