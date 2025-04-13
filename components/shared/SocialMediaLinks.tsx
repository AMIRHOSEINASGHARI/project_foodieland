import Image from "next/image";

const SocialMediaLinks = () => {
    return (
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
    );
};

export default SocialMediaLinks;
