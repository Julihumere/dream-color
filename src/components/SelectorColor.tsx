import { useEffect } from "react";
import { useLocation } from "wouter";
export type SelectorColorProps = {
  color: string;
  setColor: (color: string) => void;
};

export default function SelectorColor({ color, setColor }: SelectorColorProps) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search).get(
      "color"
    );

    if (queryString) {
      setColor(queryString ?? "");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    setLocation(`?color=%23${e.target.value.slice(1, 8)}`);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <label className="border-2 border-[#dedede] rounded-md w-[400px] flex items-center justify-evenly py-2">
        <input type="color" onChange={(e) => handleChange(e)} value={color} />
        <input
          className="w-3/4 py-2 outline-none bg-transparent"
          type="text"
          value={color}
          onChange={(e) => handleChange(e)}
          placeholder="#FF0980"
        />
      </label>
    </div>
  );
}
