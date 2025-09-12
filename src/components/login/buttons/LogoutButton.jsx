"use client";

import { logout } from "@/app/auth/login/actions";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button onClick={logout} variant={"outline"}>
      Logout
    </Button>
  );
}
