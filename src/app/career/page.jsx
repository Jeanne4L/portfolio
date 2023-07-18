import CareerPageContent from '@/components/CareerPageContent';

export let metadata = {
	title: 'Sandra Petereau | Parcours',
	description: 'Anciennement vendeuse, aujourd\'hui développeuse. Je vous présente mon parcours jusqu\'à la programmation informatique.',
    robots: {
        index: false,
        follow: true,
        nocache: false
    }
};

export default function Career() {
    return <CareerPageContent/>
}