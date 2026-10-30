import { Link } from "@inertiajs/react";
import Button from "./ui/button";
import { FaPlay } from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 p-4 py-16 md:flex-row md:gap-20">
            <div className="flex flex-col items-start gap-6">
                <p className="text-primary text-xs font-semibold tracking-widest uppercase md:text-sm">
                    Your ideas, Organized
                </p>
                <h1 className="text-3xl leading-13 font-extrabold md:max-w-md md:text-4xl lg:text-5xl">
                    The workspace for your thoughts.
                </h1>
                <p className="text-muted-foreground text-sm font-medium md:max-w-md md:text-base">
                    Flowspace helps you capture, organize and build on your
                    ideas -- all in one place. No clutter. Just a clean,
                    flexible workspace.
                </p>
                <div className="flex items-center gap-6">
                    <Button
                        size="xl"
                        render={
                            <Link href="/auth/register">
                                Get Started For Free
                            </Link>
                        }
                    />
                    <Button
                        size="xl"
                        variant="ghost"
                        render={
                            <Link href="/auth/register">
                                <FaPlay size="15" />
                                <span>Watch the demo</span>
                            </Link>
                        }
                    />
                </div>
            </div>
            <img src="/hero.png" alt="Hero image" />
        </section>
    );
}
