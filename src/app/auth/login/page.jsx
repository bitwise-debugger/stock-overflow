import { auth } from "@/auth";
import { LoginForm } from "@/components/login-form";
import { CardTitle } from "@/components/ui/card";
import Image from "next/image";

import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session) {
    redirect(`/${session.user.role}/dashboard`);
  }
  return (
    <main className="grow flex flex-col items-center bg-[#f5f5f5] justify-center">
      {/* <LoginForm /> */}
      {/* <div className="Logo flex items-center gap-3 mb-3">
        <Image
          width={56}
          height={56}
          alt="Stock Overflow Logo"
          src={"/icons/favicon.svg"}
        />
        <span className="font-semibold text-lg">Stock Overflow</span>
          <CardTitle className="text-xl">Stock Overflow</CardTitle>
      </div> */}
      <LoginForm />
    </main>
  );
}
