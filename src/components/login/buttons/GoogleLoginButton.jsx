"use client";
import { googleLogin } from "@/app/auth/login/actions";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import React, { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export default function GoogleLoginButton() {
  const [state, formAction] = useActionState(googleLogin, {
    success: null,
    message: null,
  });
  const { pending: isPending } = useFormStatus();
  useEffect(() => {
    if (state?.message) toast.error(state.message);
  }, [state]);
  return (
    <Button
      formAction={formAction}
      className="disabled:opacity-30"
      disabled={false}
      variant={"outline"}
    >
      {isPending ? (
        <>
          <span>Loading</span>
          <LoaderCircle strokeWidth={3} className="animate-spin" />
        </>
      ) : (
        <>
          <span> Continue with Google</span>
          <Image
            src={"/google.png"}
            width={28}
            height={28}
            className="rounded-full"
            alt="Google_Logo"
          />
        </>
      )}
    </Button>
  );
}
