import "./globals.css";

export const metadata = {
  title: "Mint Barú Cartagena",
  description: "Luxury boutique hotel in Barú, Cartagena",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
