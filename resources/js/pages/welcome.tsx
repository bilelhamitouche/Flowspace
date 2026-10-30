import BuiltForFocus from "@/components/built-for-focus";
import Features from "@/components/features";
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Flowspace" />
            <div className="bg-background text-foreground flex min-h-screen flex-col">
                <Header />
                <Hero />
                <div className="bg-surface w-full">
                    <Features />
                </div>
                <div className="bg-background w-full">
                    <BuiltForFocus />
                </div>
                <div className="bg-primary w-full">
                    <GetStarted />
                </div>
                <div className="bg-foreground w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}
