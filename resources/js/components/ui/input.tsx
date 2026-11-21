import { Input as BaseInput } from "@base-ui/react";
import { InputProps as BaseInputProps } from "@base-ui/react/input";

type InputVariant = "default" | "filled";
type InputSize = "sm" | "md" | "lg" | "xl";

type InputProps = Omit<BaseInputProps, "size"> & {
    variant?: InputVariant;
    size?: InputSize;
};

const variants: Record<InputVariant, string> = {
    default: ["bg-inherit text-foreground", "focus-visible:focus-ring"].join(
        " ",
    ),
    filled: ["bg-surface-secondary text-foreground", "hover:bg-muted"].join(
        " ",
    ),
};

const sizes: Record<InputSize, string> = {
    sm: "h-7 px-2 text-xs",
    md: "h-8 px-3 text-sm",
    lg: "h-10 px-4 text-sm",
    xl: "h-12 px-6 text-sm",
};

export default function Input({
    variant = "default",
    size = "md",
    className,
    ...props
}: InputProps) {
    return (
        <BaseInput
            {...props}
            className={[
                "inline-flex shrink-0 items-center justify-center gap-2",
                "border border-surface-secondary",
                "transition-colors duration-100",
                "focus-visible:outline-2 focus-visible:outline-offset-2",
                "focus-visible:outline-focus-ring",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "pressed:translate-y-px rounded-sm",
                variants[variant],
                sizes[size],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        />
    );
}
