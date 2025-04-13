import Image from "next/image";

import Avatar from "@/components/ui/Avatar";

const InstagramPost = ({ image }: { image: string }) => {
    return (
        <div className="bg-white rounded overflow-hidden">
            <div className="p-3 flex items-center justify-between">
                <Avatar
                    size="md"
                    image="/avatars/avatar-2.webp"
                    name={
                        <>
                            <span>Foodieland.</span>
                            <Image
                                src="/icons/Blue-check.svg"
                                alt="check"
                                width={30}
                                height={30}
                                className="w-[12px]"
                            />
                        </>
                    }
                    subText="Tokyo, Japan"
                />
                <Image
                    src="/icons/Menu-dots.svg"
                    alt="menu"
                    width={30}
                    height={30}
                    className="w-[11px]"
                />
            </div>
            <Image
                src={image}
                alt="image"
                width={500}
                height={500}
                className="w-full h-[290px] object-cover"
            />
            <div className="p-3">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3 w-fit">
                        <Image
                            src="/icons/Heart-outline.svg"
                            alt="heart"
                            width={30}
                            height={30}
                            className="w-[19px]"
                        />
                        <Image
                            src="/icons/Comment.svg"
                            alt="Comment"
                            width={30}
                            height={30}
                            className="w-[18px]"
                        />
                        <Image
                            src="/icons/Messanger.svg"
                            alt="Messanger"
                            width={30}
                            height={30}
                            className="w-[18px]"
                        />
                    </div>
                    <div className="flex items-center gap-[3px] absolute left-[calc(50%-11.5px)]">
                        <div className="size-[5px] rounded-full bg-[#3897F0]" />
                        <div className="size-[5px] rounded-full bg-[#00000026]" />
                        <div className="size-[5px] rounded-full bg-[#00000026]" />
                    </div>
                    <div>
                        <Image
                            src="/icons/Save.svg"
                            alt="Save"
                            width={30}
                            height={30}
                            className="w-[15px]"
                        />
                    </div>
                </div>
                <div className="mt-3 mb-1 space-y-1">
                    <div className="flex items-center">
                        <Avatar image="/avatars/avatar-3.webp" size="sm" />
                        <p className="text-[10px] font-light tracking-[-0.05px]">
                            Liked by{" "}
                            <span className="font-semibold">craig_love</span>{" "}
                            and <span className="font-semibold">44,686</span>
                        </p>
                    </div>
                    <p className="text-[10px] font-light tracking-[-0.05px]">
                        <span className="font-semibold">Foodieland.</span> The
                        vegetables dishes need to have certain vitamin for those
                        people
                    </p>
                </div>
                <span className="text-[#00000066] text-[8.5px] font-light">
                    September 19
                </span>
            </div>
        </div>
    );
};

export default InstagramPost;
