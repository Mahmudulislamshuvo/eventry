import "./globals.css";

export const metadata = {
  title: "Events",
  description: "A simple event management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
