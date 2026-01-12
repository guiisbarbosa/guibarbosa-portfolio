import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "h-10 inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus:outline-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-(--highlight) text-(--c-900) hover:bg-(--highlight-hover)",
        secondary: "bg-(--c-700) text-(--neutral-light) hover:bg-(--c-600)",
        outline:
          "border-2 border-(--c-400) text-(--c-400) hover:bg-(--c-700)/50",
      },
      size: {
        lg: "px-4 py-2 text-base",
        md: "px-3 py-1.5 text-sm",
        sm: "px-2 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);
