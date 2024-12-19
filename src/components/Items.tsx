import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type Props = {
  color: string;
};

export default function Items({ color }: Props) {
  return (
    <div>
      <Button className="" style={{ backgroundColor: color }}>
        Prueba
      </Button>
      <Label className="flex items-center">
        <Checkbox
          checked
          style={{ "--color": color, "--border": color }}
          className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] border-[var(--border)] rounded-sm mr-2"
        />
        Probando los Checks
      </Label>
      <Label className="flex items-center">
        <Checkbox
          style={{ "--color": color, "--border": color }}
          className="data-[state=checked]:bg-[var(--color)] data-[state=checked]:border-[var(--border)] border-[var(--border)] rounded-sm mr-2"
        />
        Probando los Checks
      </Label>
    </div>
  );
}
