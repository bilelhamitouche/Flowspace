import { Button as BaseButton } from "@base-ui/react";
import { ButtonProps as BaseButtonProps } from "@base-ui/react/button";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "icon" | "sm" | "md" | "lg" | "xl";

type ButtonProps = BaseButtonProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
    primary: ["bg-primary text-background", "hover:bg-primary-hover"].join(" "),
    secondary: ["bg-surface-secondary text-foreground", "hover:bg-muted"].join(
        " ",
    ),
    outline: [
        "border boder-border bg-transparent text-foreground",
        "hover:bg-surface-secondary",
    ].join(" "),
    ghost: [
        "bg-transparent text-foreground",
        "hover:bg-surface-secondary",
    ].join(" "),
    danger: ["bg-red-700 text-background", "hover:bg-red-800"].join(" "),
};

const sizes: Record<ButtonSize, string> = {
    icon: "p-1",
    sm: "h-7 px-2 text-xs",
    md: "h-8 px-3 text-sm",
    lg: "h-10 px-4 text-sm",
    xl: "h-12 px-6 text-sm",
};

export default function Button({
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    return (
        <BaseButton
            {...props}
            className={[
                "inline-flex shrink-0 items-center justify-center gap-2",
                "border border-transparent font-semibold",
                "transition-colors duration-100",
                "focus-visible:outline-2 focus-visible:outline-offset-2",
                "focus-visible:outline-focus-ring",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "pressed:translate-y-px cursor-pointer rounded-sm",
                variants[variant],
                sizes[size],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        />
    );
}
