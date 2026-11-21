import Logo from "@/components/logo";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Separator } from "@base-ui/react";
import { Link, useForm } from "@inertiajs/react";
import { SubmitEvent } from "react";
import { FaArrowRight, FaGoogle, FaSpinner } from "react-icons/fa6";
import { Toast } from "@base-ui/react";

export default function Login() {
    const { data, setData, errors, processing, post } = useForm({
        email: "",
        password: "",
        remember_token: false,
    });
    const toastManager = Toast.useToastManager();

    function submit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/auth/login", {
            onSuccess: () => {
                toastManager.add({
                    title: "Success!!!",
                    description: "Welcome back!!",
                    type: "success",
                });
            },
            onError: () => {
                toastManager.add({
                    title: "Error!!!",
                    description: "Invalid credentials",
                    type: "error",
                });
            },
        });
    }
    return (
        <div className="flex h-screen w-full flex-col md:flex-row">
            <div className="bg-background text-foreground p-8 md:w-1/2">
                <Link href="/">
                    <Logo width={200} />
                </Link>
            </div>
            <div className="bg-primary-foreground flex flex-col gap-12 p-8 font-medium md:w-1/2">
                <p className="text-shadow-primary flex items-center gap-2 self-end text-sm">
                    <span>Don&apos;t have an account?</span>
                    <Link
                        className="text-primary hover:underline"
                        href="/auth/register"
                    >
                        Register
                    </Link>
                </p>
                <div className="flex flex-col items-start gap-4 px-16">
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-2xl font-bold">Log In</h2>
                        <p className="text-muted-foreground text-sm font-medium">
                            Log In to your account and get back where you
                            stopped.
                        </p>
                    </div>
                    <form
                        className="flex w-full flex-col items-start gap-4"
                        onSubmit={submit}
                    >
                        <div className="flex w-full flex-col items-start gap-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                className="w-full"
                                placeholder="example@mail.com"
                                size="lg"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <span className="text-xs text-red-700">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium"
                            >
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                className="w-full"
                                placeholder="Choose a strong password"
                                size="lg"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <span className="text-xs text-red-700">
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                            <div className="flex items-center gap-2">
                                <Input
                                    id="remember_token"
                                    type="checkbox"
                                    name="remember_token"
                                    className="accent-primary size-4"
                                    checked={data.remember_token}
                                    onChange={(e) =>
                                        setData(
                                            "remember_token",
                                            e.target.checked,
                                        )
                                    }
                                />
                                <label
                                    htmlFor="remember_token"
                                    className="text-sm font-medium"
                                >
                                    Remember Me
                                </label>
                            </div>
                            {errors.remember_token && (
                                <span className="text-xs text-red-700">
                                    {errors.remember_token}
                                </span>
                            )}
                        </div>
                        <Button
                            disabled={processing}
                            type="submit"
                            size="lg"
                            className="group w-full"
                        >
                            {processing && (
                                <FaSpinner size="15" className="animate-spin" />
                            )}
                            Log In
                            <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
                        </Button>
                    </form>
                    <div className="flex w-full items-center gap-3">
                        <Separator className="bg-muted h-px w-full flex-1" />
                        <span className="text-muted-foreground text-sm">
                            OR
                        </span>
                        <Separator className="bg-muted h-px w-full flex-1" />
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full"
                        render={
                            <a href="/auth/google">
                                <FaGoogle /> <span>Continue with Google</span>
                            </a>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
