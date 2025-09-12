import Image from "next/image";

export default function Login() {
  return (
    <main className="grow flex items-center justify-center">
      <form className="h-6/12 w-96 shadow-2xl rounded-md flex flex-col items-center justify-start">
        <Image
          width={172}
          height={172}
          alt="Stock Overflow Logo"
          src={"/logo-full.png"}
        />
      </form>
    </main>
  );
}
