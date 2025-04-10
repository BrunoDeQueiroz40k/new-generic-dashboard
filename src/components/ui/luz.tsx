import * as React from "react"

import { cn } from "@/lib/utils"

const Luz = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-green-500 to-emerald-500",
      className
    )}
    {...props}
  />
))
Luz.displayName = "Luz"

export { Luz }