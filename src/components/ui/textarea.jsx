import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
    <textarea
        ref={ref}
        className={cn(
            "w-full rounded-lg border border-[#ccc] bg-transparent px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition resize-none",
            className
        )}
        {...props}
    />
));
Textarea.displayName = "Textarea";

export { Textarea };
