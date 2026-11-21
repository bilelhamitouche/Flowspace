import { cn } from "@/lib/utils";
import { Toast } from "@base-ui/react/toast";
import {
    FaCircleCheck,
    FaExclamation,
    FaInfo,
    FaSpinner,
    FaX,
} from "react-icons/fa6";

const toastVariants = {
    success: {
        container: "bg-green-50 text-green-900",
        icon: "text-green-600",
        iconBackground: "bg-green-100",
    },
    error: {
        container: "bg-red-50 text-red-900",
        icon: "text-red-600",
        iconBackground: "bg-red-100",
    },
    warning: {
        container: "bg-yellow-50 text-yellow-900",
        icon: "text-yellow-600",
        iconBackground: "bg-yellow-100",
    },
    info: {
        container: "bg-blue-50 text-blue-900",
        icon: "text-blue-600",
        iconBackground: "bg-blue-100",
    },
    loading: {
        container: "bg-surface text-foreground",
        icon: "text-muted-foreground",
        iconBackground: "bg-muted",
    },
} as const;

const iconVariants = {
    success: <FaCircleCheck className={cn(toastVariants["success"].icon)} />,
    error: <FaX className={cn(toastVariants["error"].icon)} />,
    warning: <FaExclamation className={cn(toastVariants["warning"].icon)} />,
    info: <FaInfo className={cn(toastVariants["info"].icon)} />,
    loading: <FaSpinner className={cn(toastVariants["loading"].icon)} />,
};

type ToastVariant = keyof typeof toastVariants;

function ToastList({ closeButton = false }: { closeButton?: boolean }) {
    const { toasts } = Toast.useToastManager();

    return (
        <Toast.Portal>
            <Toast.Viewport className="fixed right-4 bottom-4 z-50 flex w-80 flex-col gap-2 outline-none">
                {toasts.map((toast) => {
                    const variant =
                        toastVariants[toast.type as ToastVariant] ??
                        toastVariants.info;
                    return (
                        <Toast.Root
                            key={toast.id}
                            toast={toast}
                            className={cn(
                                "p-3 shadow-lg w-full rounded-sm",
                                variant.container,
                            )}
                        >
                            <Toast.Content className="flex w-full items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <Toast.Title
                                        className={cn(
                                            variant.container,
                                            "text-sm font-bold",
                                        )}
                                    />
                                    <Toast.Description className="text-muted-foreground text-sm" />
                                </div>
                                <div
                                    className={cn(
                                        toastVariants[
                                            toast.type as ToastVariant
                                        ].iconBackground,
                                        "flex size-8 items-center justify-center rounded-full",
                                    )}
                                >
                                    {iconVariants[toast.type as ToastVariant]}
                                </div>
                                {closeButton && (
                                    <Toast.Close
                                        aria-label="Close notification"
                                        className="absolute top-1 right-1 shrink-0 cursor-pointer rounded-full bg-inherit opacity-60 hover:opacity-100"
                                    >
                                        <FaX className="size-3" />
                                    </Toast.Close>
                                )}
                            </Toast.Content>
                        </Toast.Root>
                    );
                })}
            </Toast.Viewport>
        </Toast.Portal>
    );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    return (
        <Toast.Provider>
            {children}
            <ToastList closeButton={true} />
        </Toast.Provider>
    );
}
