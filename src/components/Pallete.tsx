import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Copy } from "lucide-react";
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

  const handleCopy = (color: string) => {
    clipboard(color);
    toast({
      description: `Color ${color} copiado`,
      action: <ToastAction altText="Cancel">❌</ToastAction>,
    });
  };

  return (
    <TooltipProvider>
      <main className="w-[90%] h-52 flex flex-wrap justify-center items-center">
        {lightScale.map((color, index) => (
          <Tooltip key={index} delayDuration={100}>
            <TooltipTrigger
              onClick={() => handleCopy(color)}
              className="w-20 h-20 flex items-center justify-center border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
              style={{ backgroundColor: color }}
            >
              <span className="-z-10 hover:z-10">
                <Copy color="black" />
              </span>
            </TooltipTrigger>

            <TooltipContent>
              <p>{color}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Tooltip delayDuration={100}>
          <TooltipTrigger
            onClick={() => handleCopy(color)}
            className="w-20 h-20 flex items-center justify-center border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
            style={{ backgroundColor: color }}
          >
            <span className="-z-10 hover:z-10">
              <Copy />
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{color}</p>
          </TooltipContent>
        </Tooltip>
        {darkScale.map((color, index) => (
          <Tooltip key={index} delayDuration={100}>
            <TooltipTrigger
              onClick={() => handleCopy(color)}
              className="w-20 h-20 flex items-center justify-center border-[0.5px] border-white hover:scale-110 hover:px-2 transition-all ease-out duration-300"
              style={{ backgroundColor: color }}
            >
              <span className="-z-10 hover:z-10">
                <Copy />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{color}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </main>
    </TooltipProvider>
  );
}
