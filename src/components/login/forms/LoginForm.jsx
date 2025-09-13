import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";
import CredentialsLoginButton from "@/components/login/buttons/CredentialsLoginButton";
import GoogleLoginButton from "@/components/login/buttons/GoogleLoginButton";
export default function LoginForm() {
  return (
    <form className="h-fit w-[425px] shadow-lg rounded-xl flex flex-col border justify-start px-6 pb-6 bg-white">
      <Image
        width={122}
        height={122}
        alt="Stock Overflow Logo"
        src={"/icons/favicon.svg"}
        className="mx-auto pt-6"
      />
      {/* <p className="text-center w-full pb-6 font-semibold text-xl uppercase">
          Stock Overflow
        </p> */}
      <div className="Inputs w-full flex flex-col px-2 mb-2">
        <div className="InputGroup  mb-5">
          <Label htmlFor="email" className={"ms-1 mb-2"}>
            Email
          </Label>
          <Input
            type={"email"}
            name="email"
            placeholder="Enter your email"
            className={"w-full"}
          />
        </div>
        <div className="InputGroup  mb-5">
          <Label htmlFor="email" className={"ms-1 mb-2"}>
            Password
          </Label>
          <Input
            type={"password"}
            name="password"
            placeholder="Enter your password"
            className={"w-full"}
          />
        </div>
        <CredentialsLoginButton />
      </div>
      <div className="Separator flex items-center w-full gap-5 px-5">
        <div className="sep-left h-[1px] w-full bg-zinc-300"></div>
        <span className="font-medium">OR</span>
        <div className="sep-right h-[1px] w-full bg-zinc-300"></div>
      </div>
      <div className="socialButtons w-full flex flex-col px-2 mt-2">
        <GoogleLoginButton />
      </div>
      <span className="text-center w-full mt-5 text-xs italic font-medium text-zinc-500">
        The Accounts are managed by admin
      </span>
    </form>
  );
}
