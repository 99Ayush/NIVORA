import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export default function NivoraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("fill-current", props.className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 50 L50 20 L80 50 L80 80 L20 80 Z"
        stroke="hsl(var(--background))"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        fill="hsl(var(--primary))"
        d="M20 50 L50 20 L50 80 L20 80 Z"
        stroke="hsl(var(--background))"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="68" cy="32" r="6" fill="hsl(var(--background))" />
    </svg>
  );
}
