import "../../src/app/globals.css";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Footer from "./_components/Footer";
import RotatingCTA from "./_components/RotatingCTA";

export const metadata = {
  title: {
    template: "AD Marketings | %s",
    default: "AD Marketings | Home",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen overflow-x-hidden font-serif">
        <div className="flex flex-col w-full">
          <Header />
          <Main className="w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8">
            {children}
          </Main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
