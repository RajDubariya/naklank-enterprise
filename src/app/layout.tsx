import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const myFont = localFont({
  src: "./fonts/Gilmer-Regular.woff",
  display: "swap",
});

export const revalidate = 10;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>{children}</body>
    </html>
  );
}
