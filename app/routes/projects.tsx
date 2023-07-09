import FeaturedProjects from "~/components/Projects";
import { projects } from "~/utils/data";

export default function Projects() {
    return (
        <>
            <h1 className="main-heading text-7xl">Projects</h1>
            <FeaturedProjects projects={projects} />
        </>
    );
}
