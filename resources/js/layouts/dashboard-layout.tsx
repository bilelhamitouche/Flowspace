import Logo from "@/components/logo";
import Sidebar, {
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarProvider,
} from "@/components/ui/sidebar";
import UserDropdown from "@/components/user-dropdown";
import WorkspaceSwitcher from "@/components/workspace-switcher";
import { usePage } from "@inertiajs/react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { auth } = usePage().props;
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">
                <Sidebar className="p-2">
                    <SidebarHeader className="flex w-full flex-col items-center justify-center">
                        <Logo dark={true} />
                        <WorkspaceSwitcher />
                    </SidebarHeader>
                    <SidebarContent>
                        <p>Hello World</p>
                    </SidebarContent>
                    <SidebarFooter className="border-t border-t-muted/50 pt-2">
                        <UserDropdown user={auth.user} />
                    </SidebarFooter>
                </Sidebar>
                <div className="h-full w-full">{children}</div>
            </div>
        </SidebarProvider>
    );
}
