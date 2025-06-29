import Link from "next/link";
import logo from "../../../public/cropped-FinalLogo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 z-10 relative"
      aria-label="Go to homepage"
      title="AD Marketings Home"
    >
      <Image
        src={logo}
        alt="admarketings logo"
        quality={80}
        placeholder="blur"
        priority
        height={180}
        width={180}
        className="object-contain w-[100px] md:w-[180px] sm:max-w-[140px]"
      />
    </Link>
  );
}

export default Logo;
