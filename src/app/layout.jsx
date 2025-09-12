import "./globals.css";
export const metadata = {
  title: {
    default: "Stock Overflow | Inventory Management System",
    template: "%s | Stock Overflow",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-screen">{children}</body>
    </html>
  );
}
