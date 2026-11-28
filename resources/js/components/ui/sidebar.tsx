import {
    ComponentProps,
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import Button, { ButtonProps } from "./button";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Drawer } from "@base-ui/react";
import { LuPanelLeftOpen, LuPanelLeftClose } from "react-icons/lu";
import { cn } from "@/lib/utils";

export type SidebarProps = ComponentProps<"aside">;

export default function Sidebar({
    children,
    className,
    ...props
}: SidebarProps) {
    const { open } = useSidebar();
    const isMobile = useIsMobile();
    return isMobile ? (
        <MobileSidebar {...props}>{children}</MobileSidebar>
    ) : (
        <div
            className={cn(
                "shrink-0 overflow-hidden transition-[width] duration-200 ease-in-out",
                open ? "w-2xs" : "w-0",
            )}
        >
            <aside className="bg-primary text-background flex h-full flex-col p-2">
                {children}
            </aside>
        </div>
    );
}

export type SidebarState = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    toggleSidebar: () => void;
    openMobile: boolean;
    setOpenMobile: Dispatch<SetStateAction<boolean>>;
    toggleSidebarMobile: () => void;
};

const SidebarContext = createContext<SidebarState | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(true);
    const [openMobile, setOpenMobile] = useState(false);

    function toggleSidebar() {
        setOpen((prev) => !prev);
    }

    function toggleSidebarMobile() {
        setOpenMobile((prev) => !prev);
    }
    return (
        <SidebarContext.Provider
            value={{
                open,
                setOpen,
                toggleSidebar,
                openMobile,
                setOpenMobile,
                toggleSidebarMobile,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export function SidebarTrigger() {
    const isMobile = useIsMobile();
    const { open, openMobile, toggleSidebar, toggleSidebarMobile } =
        useSidebar();
    const isOpen = isMobile ? openMobile : open;
    return (
        <Button
            size="icon"
            variant="ghost"
            onClick={isMobile ? toggleSidebarMobile : toggleSidebar}
        >
            {isOpen ? <LuPanelLeftClose /> : <LuPanelLeftOpen />}
        </Button>
    );
}

export function SidebarHeader({ children, ...props }: ComponentProps<"div">) {
    return (
        <div className="shrink-0 p-1" {...props}>
            {children}
        </div>
    );
}

export function SidebarContent({ children, ...props }: ComponentProps<"div">) {
    return (
        <div className="min-h-0 flex-1 overflow-y-scroll p-2" {...props}>
            {children}
        </div>
    );
}

export function SidebarFooter({ children, ...props }: ComponentProps<"div">) {
    return (
        <div className="shrink-0 p-1" {...props}>
            {children}
        </div>
    );
}

export function SidebarMenu({ children, ...props }: ComponentProps<"div">) {
    return (
        <div className="flex w-full flex-col gap-1" {...props}>
            {children}
        </div>
    );
}

export function SidebarMenuButton({ children, ...props }: ButtonProps) {
    return (
        <Button className="w-full" {...props}>
            {children}
        </Button>
    );
}

export function MobileSidebar({ children, ...props }: SidebarProps) {
    const { openMobile, setOpenMobile } = useSidebar();
    return (
        <Drawer.Root
            open={openMobile}
            onOpenChange={setOpenMobile}
            swipeDirection="left"
            {...props}
        >
            <Drawer.Portal>
                <Drawer.Backdrop className="bg-foreground/50 fixed inset-0 z-40 transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
                <Drawer.Viewport className="fixed inset-0 z-50">
                    <Drawer.Popup className="bg-primary text-background relative flex h-full w-full flex-col border-0 shadow-none transition-transform duration-300 ease-in-out outline-none data-[ending-style]:-translate-x-full data-[starting-style]:-translate-x-full">
                        {children}
                    </Drawer.Popup>
                </Drawer.Viewport>
            </Drawer.Portal>
        </Drawer.Root>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useSidebar must be within a SidebarProvider");
    }

    return context;
}
