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
  const [, setLocation] = useLocation();
  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search).get(
      "color"
    );

    if (queryString) {
      setColor(queryString ?? "");
    }
  }, []);

  const handleChangePrimary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    setLocation(`?color=%23${e.target.value.slice(1, 8)}`);
  };

  const handleChangeSecondary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryColor(e.target.value);
    setLocation(`?font=%23${e.target.value.slice(1, 8)}`);
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
