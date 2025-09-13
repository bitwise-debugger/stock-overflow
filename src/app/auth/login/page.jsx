import { auth } from "@/auth";
import LoginForm from "@/components/login/'forms/LoginForm";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <main className="grow flex items-center bg-[#f5f5f5] justify-center">
      <LoginForm />
    </main>
  );
}
