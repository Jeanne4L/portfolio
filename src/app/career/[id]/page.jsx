import experiences from '@/data/career.json';
import XpPageContent from '@/components/XpPageContent';
import { notFound } from 'next/navigation';

function fetchXP(id) {
    const xp = experiences.find((xp) => xp.id === id);
    return xp
}

export let metadata = {
    title: `Sandra Petereau | `,
    description: '',
    robots: {
		index: true,
		follow: false,
		nocache: false,
	},
}

export default function CareerXP({ params }) {
    const xp = fetchXP(params.id);

    if(!xp) {
        notFound();
    } else {
        metadata.title = `Sandra Petereau | ${xp.id}`;

        if(xp.id === 'commerce') {
            metadata.description = 'J\'ai commencé ma carrière dans le commerce, je vous explique tout ici.'
        } else if(xp.id === 'prep' || xp.id === 'training') {
            metadata.description = 'Le développement web est devenu une vraie passion depuis que j\'ai testé sur mon temps libre. Voici ma reconversion.'
        } else if(xp.id === 'goals') {
            metadata.description = 'Aujourd\'hui diplômée en tant que développeuse web, je ne veux plus m\'arrêter. Découvrez mes nouveaux objectifs.'
        }
        
        return <XpPageContent xp={xp}/>
    }
}