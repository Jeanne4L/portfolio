'use client'

import { useRouter } from 'next/navigation';
import CareerLogo from '../CareerLogo';
import ItemSummary from '../ItemSummary';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectClickedXp, selectHoveredXp } from '@/redux/selectors';
import { selectTheme } from '@/redux/selectors';
import * as xpActions from '@/redux/features/xpSlice'

export default function CareerPageContent() {
    const router = useRouter();
    const dispatch = useDispatch();
    const selected = useSelector(selectClickedXp);
    const hovered = useSelector(selectHoveredXp);
    const theme = useSelector(selectTheme)

    function handleClick(id) {
        dispatch(xpActions.clic(id))
        router.push(`/career/${id}`)
    }

    return (
        <div className={`container ${styles.main}`}>
            <h1 className={styles.title}>Mon parcours</h1>
            <p className={styles.explanations}>Cliquez sur les parties du logo pour découvrir mon évolution professionnelle !</p>
            <div className={styles.desktop_container}>
                <div className={`${styles.logo_container} ${theme === 'dark' ? styles.dark_mode : ''}`}>
                    <CareerLogo/>
                </div>
                <div className={styles.flex}>
                    <ItemSummary 
                        title={'Mon ancienne vie'} 
                        summary={'Ma carrière dans le commerce'} 
                        page={'career'} 
                        id={'commerce'}
                        hovered={hovered === 'commerce' ? hovered : ''}
                        selected={selected === 'commerce' ? selected : ''}
                        onClick={() => handleClick('commerce')}
                    />
                    <ItemSummary 
                        title={'Début de reconversion'} 
                        summary={'La confirmation de mon nouvel itinéraire'} 
                        page={'career'} 
                        id={'prep'}
                        hovered={hovered === 'prep' ? hovered : ''}
                        selected={selected === 'prep' ? selected : ''}
                        onClick={() => handleClick('prep')}
                    />
                    <ItemSummary 
                        title={'Formation Développeur web'} 
                        summary={'Le début d\'une nouvelle vie'} 
                        page={'career'} 
                        id={'training'}
                        hovered={hovered === 'training' ? hovered : ''}
                        selected={selected === 'training' ? selected : ''}
                        onClick={() => handleClick('training')}
                    />
                    <ItemSummary 
                        title={'Mes objectifs'} 
                        summary={'Des perspectives variées et captivantes'} 
                        page={'career'} 
                        id={'goals'}
                        hovered={hovered === 'goals' ? hovered : ''}
                        selected={selected === 'goals' ? selected : ''}
                        onClick={() => handleClick('goals')}
                    />
                </div>
            </div>
        </div>
    )
}