import Button from "@/components/ui/button";
import { router, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth } = usePage().props;
    return (
        <div className="flex w-full items-center justify-between p-4">
            <span className="font-medium">{auth.user.name}</span>
            <Button
                size="lg"
                variant="danger"
                onClick={() => router.post("/auth/logout")}
            >
                Log Out
            </Button>
        </div>
    );
}
