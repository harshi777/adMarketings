import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header() {
  return (
    <header className="w-full overflow-x-hidden">
      <div className="border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-6 overflow-x-hidden">
        <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
