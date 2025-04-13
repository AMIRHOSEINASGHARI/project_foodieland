type BadgeProps = {
    icon: string;
    text: string;
    bg?: boolean;
};

type CustomButtonProps = {
    text: string;
    icon?: string;
};

type AvatarProps = {
    image: string;
    name?: string;
    subText?: string;
    size?: "sm" | "md" | "lg";
};

export type { BadgeProps, CustomButtonProps, AvatarProps };
