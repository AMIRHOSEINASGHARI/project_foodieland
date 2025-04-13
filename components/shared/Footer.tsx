import Link from "next/link";

import Logo from "./Logo";
import SubText from "./SubText";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
    return (
        <footer className="container-base">
            <div className="flex max-md:flex-col md:items-center md:justify-between gap-5 border-b border-[#0000001A] pb-5 md:pb-10">
                <div className="flex flex-col gap-3">
                    <Logo />
                    <SubText subText="Lorem ipsum dolor sit amet, consectetuipisicing elit, " />
                </div>
                <ul className="flex items-center max-md:justify-between gap-5 md:gap-10">
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
            </div>
            <div className="py-5 md:py-10 flex max-md:flex-col max-md:items-center gap-5 relative">
                <div className="shrink-0 md:absolute md:right-0">
                    <SocialMediaLinks />
                </div>
                <p className="max-md:text-sm text-center w-full">
                    © 2020 Flowbase. Powered by{" "}
                    <span className="text-orange-600">Webflow</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
