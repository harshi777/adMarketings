// import Link from "next/link";
// import logo from "../../../public/cropped-FinalLogo.png";
// import Image from "next/image";

// function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-4 z-10 absolute left-4">
//       <Image
//         src={logo}
//         alt="admarketings logo"
//         quality={80}
//         placeholder="blur"
//         height="180"
//         width="180"
//       />
//     </Link>
//   );
// }

// export default Logo;

import Link from "next/link";
import logo from "../../../public/cropped-FinalLogo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 relative">
      <Image
        src={logo}
        alt="admarketings logo"
        quality={80}
        placeholder="blur"
        height={120} // reduced height for better responsiveness
        width={120}
        className="object-contain max-w-[100px] sm:max-w-[120px]"
      />
    </Link>
  );
}

export default Logo;
