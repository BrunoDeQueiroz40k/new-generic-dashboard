import * as React from "react"

import { cn } from "@/lib/utils"

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "font-semibold pb-4 flex items-center gap-2",
      className
    )}
    {...props}
  />
))
Title.displayName = "Title"

export { Title }