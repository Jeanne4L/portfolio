import Form from '@/components/Form';
import AnimatedTitle from '@/components/AnimatedTitle';

// METADATA
export const metadata = {
	title: 'Sandra Petereau | Contact',
    desciption: 'À la recherche d\'une développeuse web junior ? Contactez-moi!',
    robots: {
        index: false,
        follow: false,
        nocache: true
    }
};

export default function Contact() {
    return(
        <div className='container'>
            <AnimatedTitle
					h1Text={'Besoin d\'une'}
					pText={'développeuse web ?'}
					style={'center'}
				/>
            <Form/>
        </div>
    )
}