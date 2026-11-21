import PricingCard from "./pricing-card";

export default function Pricing() {
    return (
        <section className="container mx-auto flex max-w-7xl flex-col items-center gap-8 p-8 py-20">
            <h3 className="text-primary text-sm font-medium tracking-widest uppercase">
                Pricing
            </h3>
            <div className="space-y-2 text-center">
                <p className="text-3xl font-bold md:text-4xl">
                    Simple transparent pricing
                </p>
                <p className="text-muted-foreground text-base font-medium">
                    Start free, upgrade when you&apos;re ready
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <PricingCard
                    title="Free"
                    description="Perfect for individuals and small projects."
                    price={0}
                    features={["Hello", "World"]}
                />
                <PricingCard
                    title="Pro"
                    description="For professionals and growing teams."
                    price={15}
                    features={["Hello", "World"]}
                />
            </div>
        </section>
    );
}
