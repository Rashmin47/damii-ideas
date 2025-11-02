import "./globals.css";

export const metadata = {
  title: "Dami Ideas",
  description: "Interesting Ideas, shared by a brainstorming community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
