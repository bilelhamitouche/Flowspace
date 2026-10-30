import { Drawer } from "@base-ui/react";
import Button from "./ui/button";
import { FaBars, FaX } from "react-icons/fa6";
import Logo from "./logo";
import { Link } from "@inertiajs/react";

export default function MobileMenu() {
    return (
        <>
            <Drawer.Root swipeDirection="right">
                <Drawer.Trigger
                    render={
                        <Button
                            className="flex md:hidden"
                            variant="ghost"
                            size="lg"
                        >
                            <FaBars size="15" />
                        </Button>
                    }
                ></Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Viewport className="fixed inset-0 flex items-stretch justify-end p-(--viewport-padding) [--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]">
                        <Drawer.Popup className="bg-background text-foreground h-full w-full [transform:translateX(var(--drawer-swipe-movement-x))] touch-auto overflow-y-auto overscroll-contain transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none [--bleed:0rem] data-ending-style:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-swiping:select-none supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-3rem)] supports-[-webkit-touch-callout:none]:pr-6 supports-[-webkit-touch-callout:none]:[--bleed:0px]">
                            <Drawer.Content className="mx-auto flex min-w-full flex-col gap-4 p-4">
                                <div className="flex min-w-full items-center justify-between">
                                    <Logo />
                                    <Drawer.Close
                                        render={
                                            <Button size="lg" variant="ghost">
                                                <FaX />
                                            </Button>
                                        }
                                    />
                                </div>
                                <nav className="flex flex-col gap-3">
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        variant="ghost"
                                        render={
                                            <Link href="/features">
                                                Features
                                            </Link>
                                        }
                                    />
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        variant="ghost"
                                        render={
                                            <Link href="/pricing">Pricing</Link>
                                        }
                                    />
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        variant="ghost"
                                        render={
                                            <Link href="/about">About</Link>
                                        }
                                    />
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        variant="ghost"
                                        render={
                                            <Link href="/contact">Contact</Link>
                                        }
                                    />
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        variant="ghost"
                                        render={
                                            <Link href="/auth/login">
                                                Log In
                                            </Link>
                                        }
                                    />
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        render={
                                            <Link href="/auth/register">
                                                Get Started
                                            </Link>
                                        }
                                    />
                                </nav>
                            </Drawer.Content>
                        </Drawer.Popup>
                    </Drawer.Viewport>
                </Drawer.Portal>
            </Drawer.Root>
        </>
    );
}
