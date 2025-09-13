"use client";

import { logout } from "@/app/auth/login/actions";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function LogoutButton() {
  const [state, formAction, isPending] = useActionState(logout, {
    success: null,
    message: null,
  });
  useEffect(() => {
    if (state?.message) toast.error(state.message);
  }, [state]);
  return (
    <form action={formAction}>
      <Button className="disabled:opacity-30" variant={"outline"}>
        {isPending ? (
          <>
            <span>Loading</span>
            <LoaderCircle strokeWidth={3} className="animate-spin" />
          </>
        ) : (
          <span>Logout</span>
        )}
      </Button>
    </form>
  );
}
