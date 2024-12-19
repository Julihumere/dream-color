import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { clipboard } from "../utils/clipboard";
type PalleteProps = {
  lightScale: string[];
  darkScale: string[];
  color: string;
};

export default function Pallete({
  lightScale,
  darkScale,
  color,
}: PalleteProps) {
  const [colorCopied, setColorCopied] = useState("Copy");
  console.log(colorCopied);

  return (
    <TooltipProvider>
      <main className="w-screen h-64 flex justify-center items-center">
        {lightScale.map((color, index) => (
          <Tooltip key={index} delayDuration={200}>
            <TooltipTrigger
              onClick={() => {
                clipboard(color);
                setColorCopied(color);
              }}
              className="w-24 h-24 border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
              style={{ backgroundColor: color }}
            ></TooltipTrigger>
            <TooltipContent>
              <p>{colorCopied == color ? "Copied!" : "Copy"}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Tooltip delayDuration={200}>
          <TooltipTrigger
            onClick={() => {
              clipboard(color);
              setColorCopied(color);
            }}
            className="w-24 h-24 border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
            style={{ backgroundColor: color }}
          ></TooltipTrigger>
          <TooltipContent>
            <p>{colorCopied}</p>
          </TooltipContent>
        </Tooltip>
        {darkScale.map((color, index) => (
          <Tooltip key={index} delayDuration={200}>
            <TooltipTrigger
              onClick={() => {
                clipboard(color);
                setColorCopied(color);
              }}
              className="w-24 h-24 border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
              style={{ backgroundColor: color }}
            ></TooltipTrigger>
            <TooltipContent>
              <p>{colorCopied}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </main>
    </TooltipProvider>
  );
}
