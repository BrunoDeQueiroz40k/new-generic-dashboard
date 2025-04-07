import * as React from "react"

import { cn } from "@/lib/utils"

const Dot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-1.5 w-1.5 rounded-full bg-green-500",
      className
    )}
    {...props}
  />
))
Dot.displayName = "Dot"

export { Dot }