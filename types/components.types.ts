type BadgeProps = {
    icon: string;
    text: string;
    bg?: boolean;
};

type CustomButtonProps = {
    text: string;
    icon?: string;
    className?: string;
};

type AvatarProps = {
    image: string;
    name?: string;
    subText?: string;
    size?: "sm" | "md" | "lg";
};

type FoodCardProps = {
    id: string;
    image: string;
    imageAlt: string;
    isLike: boolean;
    title: string;
    timer: string;
    category: string;
    type: "primary" | "secondary";
};

export type { BadgeProps, CustomButtonProps, AvatarProps, FoodCardProps };
