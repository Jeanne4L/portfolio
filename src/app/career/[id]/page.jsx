import experiences from '@/data/career.json';
import XpPageContent from '@/components/XpPageContent';
import { notFound } from 'next/navigation';

function fetchXP(id) {
    const xp = experiences.find((xp) => xp.id === id);
    return xp
}

export let metadata = {
    title: `Sandra Petereau | `,
}

export default function CareerXP({ params }) {
    const xp = fetchXP(params.id);

    if(!xp) {
        notFound();
    } else {
        metadata.title = `Sandra Petereau | ${xp.id}`;
        return <XpPageContent xp={xp}/>
    }
}