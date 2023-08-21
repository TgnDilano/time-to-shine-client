import Footer from "./footer";
import NavBar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <div className={`overflow-x-hidden relative`}>
      <NavBar />
      <main className="flex flex-col min-h-[95vh] justify-between">
        {children}
        <Footer />
      </main>
    </div>
  );
}
