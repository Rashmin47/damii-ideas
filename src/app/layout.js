import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Dami Ideas",
  description: "Interesting Ideas, shared by a brainstorming community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
