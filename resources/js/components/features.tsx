import { FaBolt, FaFile, FaSitemap, FaUsers } from "react-icons/fa6";
import Feature from "./feature";

export default function Features() {
    return (
        <section className="container mx-auto grid max-w-7xl grid-cols-1 place-content-center gap-8 p-4 py-16 md:grid-cols-2 lg:grid-cols-4">
            <Feature
                icon={<FaFile size="32" color="teal" />}
                title="Capture Anything"
                description="Notes, ideas, links and more. Keep everything in one place and never lose track."
            />
            <Feature
                icon={<FaSitemap size="32" color="teal" />}
                title="Organize your way"
                description="Structure your information with flexible pages, folders and tags."
            />
            <Feature
                icon={<FaBolt size="32" color="teal" />}
                title="Move faster"
                description="Powerful search and quick actions help you find what you need, instantly."
            />
            <Feature
                icon={<FaUsers size="32" color="teal" />}
                title="Work together"
                description="Share, collaborate, and build with your team -- or keep it private."
            />
        </section>
    );
}
