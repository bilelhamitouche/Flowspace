import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
    return (
        <header className="flex items-center gap-4 p-4 shadow-sm">
            <SidebarTrigger />
        </header>
    );
}
