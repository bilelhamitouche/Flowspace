import { cn } from "@/lib/utils";
import { Menu, SeparatorProps } from "@base-ui/react";
import { ComponentProps } from "react";

export default function DropdownMenu({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Menu.Root>{children}</Menu.Root>;
}

export function DropdownMenuTrigger({
    children,
    ...props
}: ComponentProps<typeof Menu.Trigger>) {
    return (
        <Menu.Trigger className="w-full" {...props}>
            {children}
        </Menu.Trigger>
    );
}

export function DropdownMenuContent({
    children,
    ...props
}: ComponentProps<typeof Menu.Positioner>) {
    return (
        <Menu.Portal>
            <Menu.Positioner
                className="outline-hidden"
                sideOffset={8}
                {...props}
            >
                <Menu.Popup
                    className={`
min-w-0
flex flex-col items-start relative origin-[var(--transform-origin)] border border-muted bg-background text-foreground shadow-[0.25rem_0.25rem_0] shadow-foreground/12 outline-hidden transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0 rounded-sm p-1
                        ${props.className ?? ""}
                    `}
                >
                    {children}
                </Menu.Popup>
            </Menu.Positioner>
        </Menu.Portal>
    );
}

export function DropdownMenuSeparator({ ...props }: SeparatorProps) {
    return (
        <Menu.Separator
            {...props}
            className="my-1 h-px w-full bg-neutral-300"
        />
    );
}

export function DropdownMenuItem({
    children,
    className,
    ...props
}: ComponentProps<typeof Menu.Item>) {
    return (
        <Menu.Item
            {...props}
            className={cn(
                "flex cursor-pointer items-center gap-2 data-highlighted:bg-muted outline-none border-none shadow-none w-full px-2 py-1.5 text-sm font-medium",
                className,
            )}
        >
            {children}
        </Menu.Item>
    );
}
