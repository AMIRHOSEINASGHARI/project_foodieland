import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="w-fit h-fit">
            <Image
                src="/logo.png"
                alt="Logo"
                width={300}
                height={300}
                className="w-[110px]"
            />
        </Link>
    );
};

export default Logo;
