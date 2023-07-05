'use client'

import { useState } from 'react';
import CareerLogo from '@/components/CareerLogo';
import ItemSummary from '@/components/ItemSummary';
import styles from './page.module.css'

export let metadata = {
	title: 'Sandra Petereau | Parcours',
	description: 'Generated by create next app',
};

export default function Career() {
    const [activeId, setActiveId] = useState(null);

    function handleLogoClick(id) {
        setActiveId(id) 
    }

    return (
        <div className={`container ${styles.main}`}>
            <h1>Mon parcours</h1>
            <p className='hidden'>Cliquez sur les parties du logo pour découvrir mon évolution professionnelle !</p>
            <div className={styles.logo_container}>
                <CareerLogo clickedElt={handleLogoClick} activeId={activeId}/>
            </div>
            <ItemSummary 
                title={'Mon ancienne vie'} 
                summary={'Ma carrière dans le commerce'} 
                page={'career'} 
                id={'commerce'}
                activeId={activeId === 'commerce' ? activeId : null}
                clickedElt={() => handleLogoClick('commerce')}
            />
            <ItemSummary 
                title={'Début de reconversion'} 
                summary={'La confirmation de mon nouvel itinéraire'} 
                page={'career'} 
                id={'prep'}
                activeId={activeId === 'prep' ? activeId : null}
                clickedElt={() => handleLogoClick('prep')}
            />
            <ItemSummary 
                title={'Formation Développeur web'} 
                summary={'Le début d\'une nouvelle vie'} 
                page={'career'} 
                id={'training'}
                activeId={activeId === 'training' ? activeId : null}
                clickedElt={() => handleLogoClick('training')}
            />
            <ItemSummary 
                title={'Mes objectifs'} 
                summary={'Des perspectives captivantes et variées'} 
                page={'career'} 
                id={'goals'}
                activeId={activeId === 'goals' ? activeId : null}
                clickedElt={() => handleLogoClick('goals')}
            />
        </div>
    )
}