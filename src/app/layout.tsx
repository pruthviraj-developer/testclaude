import "./globals.css";

export const metadata = {
  title: "Hopscotch Product Page",
  description: "E-commerce product page clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
