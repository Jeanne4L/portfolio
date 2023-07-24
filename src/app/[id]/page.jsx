import {notFound} from 'next/navigation';
import ProjectPageContent from '@/components/ProjectPageContent';
import projects from '@/data/projects.json';

// METADATA
export let metadata = {
    title: `Sandra Petereau | `,
    description: '',
    robots: {
		index: true,
		follow: false,
		nocache: false,
	},
}

export default function Project({params}) {
    // FIND PROJECT CORRESPONDING TO PARAMS ID
    const project = projects.find((project) => project.id === params.id);

    if(!project) {
        notFound()
    }  

    metadata.title = `Sandra Petereau | ${project.title}`;
    metadata.description = `Voici le projet ${project.title} réalisé lors de ma formation chez Openclassrooms. J'y ai appris: ${project.hardSkills.map((skill) => skill)}`;

    return <ProjectPageContent project={project}/>
}

