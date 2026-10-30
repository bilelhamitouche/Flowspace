import Button from "./ui/button";

export default function GetStarted() {
    return (
        <section className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 p-4 py-20">
            <p className="text-primary-foreground text-xs font-bold tracking-widest uppercase">
                Get started today
            </p>
            <h2 className="text-primary-foreground text-2xl font-bold md:text-3xl">
                Your workspace is waiting.
            </h2>
            <p className="text-surface-secondary max-w-md text-center">
                Join thousands of creators, builders and thinkers using
                Flowspace to turn their ideas into something real.
            </p>
            <Button size="xl" variant="secondary">
                Get Started for free
            </Button>
        </section>
    );
}
