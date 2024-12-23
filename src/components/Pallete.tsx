import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { clipboard } from "../utils/clipboard";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
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
  const { toast } = useToast();
  const [colorCopied, setColorCopied] = useState("Copy");

  return (
    <TooltipProvider>
      <main className="w-[90%] h-52 flex flex-wrap justify-center items-center">
        {lightScale.map((color, index) => (
          <Tooltip key={index} delayDuration={200}>
            <TooltipTrigger
              onClick={() => {
                clipboard(color);
                setColorCopied(color);
                toast({
                  description: "✅ Copiado.",
                  action: <ToastAction altText="Cancel">❌</ToastAction>,
                });
              }}
              className="w-20 h-20 border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
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
            className="w-20 h-20 border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
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
              className="w-20 h-20 border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
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
