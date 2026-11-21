import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ToastProvider } from "./components/ui/toaster";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

void createInertiaApp({
    title: (title) => (title ? `${title}` : appName),
    progress: {
        color: "#4B5563",
    },
    setup({ el, App, props }) {
        createRoot(el as HTMLElement).render(
            <ToastProvider>
                <App {...props} />
            </ToastProvider>,
        );
    },
});
