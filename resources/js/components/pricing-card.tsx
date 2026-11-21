import { FaCheck } from "react-icons/fa6";
import Button from "./ui/button";
import { Separator } from "@base-ui/react";

interface PricingCardProps {
    title: string;
    description: string;
    price: number;
    features: string[];
}

export default function PricingCard({
    title,
    description,
    price,
    features,
}: PricingCardProps) {
    return (
        <article className="group hover:border-primary flex min-w-sm flex-col gap-4 rounded-sm border border-gray-300 p-8 transition-colors duration-300">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-muted-foreground">{description}</p>
            <p className="text-muted-foreground font-medium">
                <span className="text-foreground text-5xl font-extrabold">
                    {price}$
                </span>
                / {price === 0 ? "forever" : "month"}
            </p>
            <Separator className="h-px w-full bg-gray-300" />
            <ul className="text-muted-foreground flex flex-col items-start gap-1">
                {features.map((feature) => (
                    <li className="flex items-center gap-2">
                        <FaCheck />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button
                variant={price === 0 ? "outline" : "primary"}
                size="lg"
                className="w-full"
            >
                Choose this plan
            </Button>
        </article>
    );
}
