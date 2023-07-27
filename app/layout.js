import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/providers";

export const metadata = {
  title: "QR Menu",
  description: "Use simple QR for seeing today's Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-lightbg dark:bg-darkbg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
