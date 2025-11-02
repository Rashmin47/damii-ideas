import MainHeader from "@/components/main-header/main-header";

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
