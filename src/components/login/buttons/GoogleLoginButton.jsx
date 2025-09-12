import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function GoogleLoginButton() {
  return (
    <Button
      formAction={async () => {
        "use server";
        await signIn("google");
      }}
      disabled={false}
      variant={"outline"}
    >
      <span> Continue with Google</span>
      <Image
        src={"/google.png"}
        width={28}
        height={28}
        className="rounded-full"
        alt="Google_Logo"
      />
    </Button>
  );
}
