"use client";
import { credentialsLogin } from "@/app/auth/login/actions";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import React, { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export default function CredentialsLoginButton() {
  const [state, formAction] = useActionState(credentialsLogin, {
    success: null,
    message: null,
  });
  const { pending: isPending } = useFormStatus();
  useEffect(() => {
    if (state?.message) toast.error(state.message);
  }, [state]);
  return (
    <Button formAction={formAction} disabled={isPending}>
      {isPending ? (
        <>
          <span>Loading</span>
          <LoaderCircle strokeWidth={3} className="animate-spin" />
        </>
      ) : (
        <span>Login</span>
      )}
    </Button>
  );
}
