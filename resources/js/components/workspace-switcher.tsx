import { Popover } from "@base-ui/react";
import { SidebarMenuButton } from "./ui/sidebar";

export default function WorkspaceSwitcher() {
    return (
        <Popover.Root>
            <Popover.Trigger
                render={
                    <SidebarMenuButton size="xl">Workspaces</SidebarMenuButton>
                }
            />
            <Popover.Portal>
                <Popover.Positioner sideOffset={8}>
                    <Popover.Popup>
                        <Popover.Title>Hello World</Popover.Title>
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    );
}
