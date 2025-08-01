import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full h-[74px] lg:mt-[35px] ">
      <div className="mx-auto max-w-screen-lg h-full">
        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-between h-full pr-[20px]">
          <div className="w-8 h-8"></div>
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Fametonic Logo"
              width={105}
              height={44}
            />
          </div>
          <button className="flex items-center justify-center w-8 h-8">
            <Image
              src="/menu-icon.svg"
              alt="Menu Icon"
              width={20}
              height={12}
              className="mr-[10px]"
            />
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-start justify-between h-full">
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Fametonic Logo"
              width={173}
              height={74}
              className="w-auto"
            />
          </div>
          <nav className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-figtree text-lg font-semibold text-[var(--link)] leading-[22px] hover:text-text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
