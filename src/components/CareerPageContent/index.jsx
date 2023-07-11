'use client'

import { useRouter } from 'next/navigation';
import CareerLogo from '../CareerLogo';
import ItemSummary from '../ItemSummary';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectXp } from '@/redux/selectors';
import { selectTheme } from '@/redux/selectors';
import * as xpActions from '@/redux/features/xpSlice'

export default function CareerPageContent() {
    const router = useRouter();
    const dispatch = useDispatch();
    const selected = useSelector(selectXp);
    const theme = useSelector(selectTheme)

    function handleClick(id) {
        dispatch(xpActions.select(id))
        router.push(`/career/${id}`)
    }

    return (
        <div className={`container ${styles.main}`}>
            <h1>Mon parcours</h1>
            <p className='hidden'>Cliquez sur les parties du logo pour découvrir mon évolution professionnelle !</p>
            <div className={`${styles.logo_container} ${theme === 'dark' ? styles.dark_mode : ''}`}>
                <CareerLogo/>
            </div>
            <ItemSummary 
                title={'Mon ancienne vie'} 
                summary={'Ma carrière dans le commerce'} 
                page={'career'} 
                id={'commerce'}
                selected={selected === 'commerce' ? selected : ''}
                onClick={() => handleClick('commerce')}
            />
            <ItemSummary 
                title={'Début de reconversion'} 
                summary={'La confirmation de mon nouvel itinéraire'} 
                page={'career'} 
                id={'prep'}
                selected={selected === 'prep' ? selected : ''}
                onClick={() => handleClick('prep')}
            />
            <ItemSummary 
                title={'Formation Développeur web'} 
                summary={'Le début d\'une nouvelle vie'} 
                page={'career'} 
                id={'training'}
                selected={selected === 'training' ? selected : ''}
                onClick={() => handleClick('training')}
            />
            <ItemSummary 
                title={'Mes objectifs'} 
                summary={'Des perspectives captivantes et variées'} 
                page={'career'} 
                id={'goals'}
                selected={selected === 'goals' ? selected : ''}
                onClick={() => handleClick('goals')}
            />
        </div>
    )
}