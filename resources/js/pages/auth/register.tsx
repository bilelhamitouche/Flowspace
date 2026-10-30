import { useForm } from "@inertiajs/react";
import { SubmitEvent } from "react";

export default function Login() {
    const { data, setData, errors, processing, post, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/auth/register", {
            onSuccess: () => {},
            onError: () => {},
        });
    }
    return <div className="h-screen w-full"></div>;
}
