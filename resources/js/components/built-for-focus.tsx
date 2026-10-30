import { FaCheck } from "react-icons/fa6";

export default function BuiltForFocus() {
    return (
        <section className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-20 p-4 py-20 md:flex-row">
            <div className="flex flex-col items-start gap-6 md:max-w-1/2">
                <p className="text-primary text-xs font-semibold tracking-widest uppercase md:text-sm">
                    Built for focus
                </p>
                <h2 className="text-3xl font-bold md:max-w-md md:text-4xl">
                    A cleaner way to think, plan and do.
                </h2>
                <p className="text-muted-foreground text-base font-medium md:max-w-md">
                    Flowspace gives you the structure you need without slowing
                    you down. Create, organize, and connect your ideas in a
                    workspace that feels effortless
                </p>
                <ul className="text-muted-foreground flex flex-col items-start gap-2 pt-4 font-medium">
                    <li className="flex items-center gap-2">
                        <FaCheck size="15" />
                        <span>Clean distraction-free interface</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheck size="15" />
                        <span>Flexible structure for any workflow</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheck size="15" />
                        <span>Fast, powerful and always available</span>
                    </li>
                </ul>
            </div>
            <img src="/details-image.png" alt="Details Image" />
        </section>
    );
}
