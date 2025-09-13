import { Toaster } from "sonner";
import "./globals.css";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});
export const metadata = {
  title: {
    default: "Stock Overflow | Inventory Management System",
    template: "%s | Stock Overflow",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-between h-screen w-screen ${poppins.className}`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
