"use client";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Forbidden() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <TriangleAlert className={cn("mb-6 h-12 w-12 text-destructive")} />

      <h1 className="mb-2 text-3xl font-bold md:text-5xl">403 - Forbidden</h1>

      <p className="mb-8 text-muted-foreground md:text-lg">
        You don't have permission to access this page.
      </p>

      <button
        onClick={() => {
          router.back();
        }}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        <ArrowLeft />
        <span>Go back</span>
      </button>
    </div>
  );
}
