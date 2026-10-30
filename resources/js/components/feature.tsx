interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function Feature({ icon, title, description }: FeatureProps) {
    return (
        <article className="flex flex-col items-start gap-4 p-4">
            <div className="bg-primary/20 flex items-center justify-center rounded-sm p-4">
                {icon}
            </div>
            <h3 className="text-lg font-extrabold">{title}</h3>
            <p className="text-muted-foreground text-sm font-medium">
                {description}
            </p>
        </article>
    );
}
