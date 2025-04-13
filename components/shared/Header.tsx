import Link from "next/link";
import Image from "next/image";

import Logo from "./Logo";

const Header = () => {
    return (
        <header className="border-b border-[#0000001A] fixed top-0 bg-white w-full">
            <div className="container-base flex items-center justify-between py-5 xl:py-8">
                <div className="flex items-center gap-5">
                    <div className="flex flex-col gap-1 lg:hidden">
                        <div className="w-[22px] h-[2px] bg-black rounded" />
                        <div className="w-[22px] h-[2px] bg-black rounded" />
                        <div className="w-[22px] h-[2px] bg-black rounded" />
                    </div>
                    <Logo />
                </div>
                <nav className="max-lg:hidden">
                    <ul className="flex items-center gap-10">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Recipes</Link>
                        </li>
                        <li>
                            <Link href="/">Blog</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                        <li>
                            <Link href="/">About us</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="flex items-center gap-8">
                    <li>
                        <Image
                            src="/social/Facebook.png"
                            alt="Facebook"
                            width={25}
                            height={25}
                            className="w-[9.92px]"
                        />
                    </li>
                    <li>
                        <Image
                            src="/social/Twitter.png"
                            alt="Twitter"
                            width={25}
                            height={25}
                            className="w-[22px]"
                        />
                    </li>
                    <li>
                        <Image
                            src="/social/Instagram-black.png"
                            alt="Instagram-black"
                            width={25}
                            height={25}
                            className="w-[22px]"
                        />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
