import { buttonVariants } from "./Button.style";
import type { ButtonProps } from "./Button.types";
import clsx from "clsx"
import { Slot } from "@radix-ui/react-slot";


export const Button = ({variant, size, className, asChild = false, ...props} : ButtonProps) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp className={clsx(buttonVariants({variant, size}), className)} {...props} />
  )
}