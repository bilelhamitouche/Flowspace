import { Link } from "@inertiajs/react";
import Logo from "./logo";
import Button from "./ui/button";
import MobileMenu from "./mobile-menu";

export default function Header() {
    return (
        <header className="container mx-auto flex max-w-7xl items-center justify-between gap-8 p-4">
            <Logo />
            <nav className="mr-auto hidden items-center gap-6 text-sm font-semibold md:flex">
                <Link
                    className="after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                    href="/features"
                >
                    Features
                </Link>
                <Link
                    className="after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                    href="/pricing"
                >
                    Pricing
                </Link>
                <Link
                    className="after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className="after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                    href="/contact"
                >
                    Contact
                </Link>
            </nav>
            <div className="hidden items-center gap-4 md:flex">
                <Button
                    size="lg"
                    variant="ghost"
                    render={<Link href="/auth/login">Log In</Link>}
                />
                <Button
                    size="lg"
                    render={<Link href="/auth/register">Get Started</Link>}
                />
            </div>
            <MobileMenu />
        </header>
    );
}
