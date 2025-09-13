import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4">
        <LoaderCircle className={cn("h-8 w-8 animate-spin text-primary")} />
        <p className="text-lg font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}