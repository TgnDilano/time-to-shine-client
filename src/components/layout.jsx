import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <section className={`overflow-x-hidden relative`}>
      <NavBar />
      <main className="flex flex-col min-h-[95vh] justify-between mt-[5.2rem]">
        {children}
        <Footer />
      </main>
    </section>
  );
}
