import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import React from "react";

export default function CredentialsLoginButton() {
  return (
    <Button
      formAction={async (formData) => {
        "use server";
        const credentials = Object.fromEntries(formData);
        await signIn("credentials", credentials);
      }}
      disabled={false}
    >
      {false ? (
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
