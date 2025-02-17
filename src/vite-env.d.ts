/// <reference types="vite/client" />
import "react";

declare module "react" {
  interface CSSProperties {
    "--color"?: string;
    "--border"?: string;
    "--color-card"?: string;
    "--light"?: string[];
    "--dark"?: string[];
    "--secondary"?: string;
  }
}
