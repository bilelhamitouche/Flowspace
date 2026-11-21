import { Link } from "@inertiajs/react";
import Logo from "./logo";
import { Separator } from "@base-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="container mx-auto max-w-7xl space-y-8 p-4 pt-20">
            <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row">
                <div className="flex flex-col items-start gap-4">
                    <Link href="/">
                        <Logo dark={true} />
                    </Link>
                    <p className="text-surface-secondary max-w-xs">
                        A calmer thought for your thoughts, projects, and
                        everything in between.
                    </p>
                    <nav className="text-muted-foreground flex items-center gap-4">
                        <Link href="github.com/flowspace">
                            <FaGithub size="20" className="hover:text-muted" />
                        </Link>
                        <Link href="x.com/flowspace">
                            <FaXTwitter
                                size="20"
                                className="hover:text-muted"
                            />
                        </Link>
                        <Link href="linkedin.com/flowspace">
                            <FaLinkedin
                                size="20"
                                className="hover:text-muted"
                            />
                        </Link>
                        <Link href="instagram.com/flowspace">
                            <FaInstagram
                                size="20"
                                className="hover:text-muted"
                            />
                        </Link>
                    </nav>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-primary text-base uppercase">
                            Product
                        </h4>
                        <nav className="text-background flex flex-col gap-4 text-sm">
                            <Link href="/features">Features</Link>
                            <Link href="/how-it-works">How It Works</Link>
                            <Link href="/changelog">Changelog</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-primary text-base uppercase">
                            Product
                        </h4>
                        <nav className="text-background flex flex-col gap-4 text-sm">
                            <Link href="/about">About</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-primary text-base uppercase">
                            Legal
                        </h4>
                        <nav className="text-background flex flex-col gap-4 text-sm">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/terms-of-service">
                                Terms of Service
                            </Link>
                            <Link href="/cookie-policy">Cookie Policy</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <Separator className="bg-muted-foreground h-px w-full flex-1" />
            <div className="text-background flex items-center justify-between pb-4">
                <p>Copyright &copy; Flowspace.</p>
                <p>Bilel Hamitouche 2026</p>
            </div>
        </footer>
    );
}
