import { auth, signOut } from "@/auth";
import LogoutButton from "@/components/login/buttons/LogoutButton";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await auth();
  // if (!session) {
  //   redirect("/auth/login");
  // }
  // const data = await auth();
  // console.log(data);

  return (
    <div className="main flex items-center justify-center">
      <LogoutButton />
    </div>
  );
}
