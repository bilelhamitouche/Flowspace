import { type User } from "@/types";
import { SidebarMenuButton } from "./ui/sidebar";
import { Avatar } from "@base-ui/react";
import DropdownMenu, {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
    FaArrowRightFromBracket,
    FaChevronDown,
    FaChevronUp,
    FaGears,
    FaUser,
} from "react-icons/fa6";
import { Link, router } from "@inertiajs/react";

export default function UserDropdown({ user }: { user: User }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <SidebarMenuButton
                        size="xl"
                        className="flex w-full items-center justify-start gap-2 px-2"
                    >
                        <Avatar.Root>
                            <Avatar.Image
                                className="w-8 rounded-full"
                                src={user.avatar}
                                alt="Avatar image"
                            />
                            <Avatar.Fallback className="text-foreground flex size-8 items-center justify-center rounded-full bg-gray-300 p-2 text-base uppercase">
                                {user.name[0]}
                            </Avatar.Fallback>
                        </Avatar.Root>
                        <span className="text-sm font-medium">{user.name}</span>
                        <div className="ml-auto flex flex-col">
                            <FaChevronUp size="10" />
                            <FaChevronDown size="10" />
                        </div>
                    </SidebarMenuButton>
                }
            />
            <DropdownMenuContent className="w-68">
                <DropdownMenuItem>
                    <Avatar.Root>
                        <Avatar.Image
                            className="w-8 rounded-full"
                            src={user.avatar}
                            alt="Avatar image"
                        />
                        <Avatar.Fallback className="text-foreground flex size-8 items-center justify-center rounded-full bg-gray-300 p-2 text-base uppercase">
                            {user.name[0]}
                        </Avatar.Fallback>
                    </Avatar.Root>
                    <div className="flex w-full flex-col items-start">
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    render={
                        <Link href="/settings">
                            <FaGears />
                            <span>Settings</span>
                        </Link>
                    }
                />
                <DropdownMenuItem
                    render={
                        <Link href="/profile">
                            <FaUser />
                            <span>Profile</span>
                        </Link>
                    }
                />
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="text-destructive data-highlighted:bg-destructive/10"
                    onClick={() => router.post("/auth/logout")}
                >
                    <FaArrowRightFromBracket />
                    <span>Log Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
