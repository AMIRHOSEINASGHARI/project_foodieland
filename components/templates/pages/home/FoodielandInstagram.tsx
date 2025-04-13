import { instagramPosts } from "@/constants";

import Heading from "@/components/shared/Heading";
import SubText from "@/components/shared/SubText";
import InstagramPost from "../../shared/InstagramPost";
import CustomButton from "@/components/ui/CustomButton";

const FoodielandInstagram = () => {
    return (
        <section className="bg-linear-0 from-primary to-primary/0 mb-30 mt-50 pb-10 xl:pb-20">
            <div className="container-base space-y-10 xl:space-y-20">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <Heading
                        className="text-center"
                        text="Check out @foodieland on Instagram"
                    />
                    <SubText
                        className="text-center max-w-[840px]"
                        subText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {instagramPosts.map((post) => (
                        <InstagramPost image={post.image} key={post.image} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <CustomButton
                        text="Visit Our Instagram"
                        icon="/social/Instagram-white.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default FoodielandInstagram;
