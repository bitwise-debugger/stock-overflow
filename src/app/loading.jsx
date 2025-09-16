import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export default function Loading({ className = "", text = "Loading..." }) {
  return (
    <div className={`flex flex-1 items-center justify-center p-4 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <LoaderCircle className={cn("h-8 w-8 animate-spin text-primary")} />
        <p className="text-lg font-medium text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
