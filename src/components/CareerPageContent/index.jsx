'use client'

import CareerLogo from '../CareerLogo';
import ItemSummary from '../ItemSummary';
import Link from 'next/link';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectClickedXp, selectHoveredXp } from '@/redux/selectors';
import * as xpActions from '@/redux/features/xpSlice'

export default function CareerPageContent() {
    const dispatch = useDispatch();
    const selected = useSelector(selectClickedXp);
    const hovered = useSelector(selectHoveredXp);

    // ALL EVENTS
    function createHandlers(id) {
        return {
            onClick: () => handleClick(id),
            onFocus: () => handleFocusHover(id),
            onMouseOver: () => handleFocusHover(id),
            onMouseOut: () => handleFocusHover(null),
        };
    }
    // CHANGE CLIC GLOBAL STATE TO COLOR LOGO PART AND TEXT AND REDIRECT TO XP PAGE
    function handleClick(id) {
        dispatch(xpActions.clic(id))
    }
    // CHANGE HOVER GLOBAL STATE TO COLOR LOGO PART AND TEXT
    function handleFocusHover(id) {
        dispatch(xpActions.hover(id))
    }

    return (
        <div className={`container ${styles.main}`}>
            <h1 className={styles.h1}>Parcours</h1>
            <h2 className={styles.explanations}>Cliquez sur les parties du logo pour découvrir mon évolution professionnelle !</h2>
            <div className={styles.desktop_container}>
                <div className={styles.logo_container}>
                    <CareerLogo/>
                </div>
                <div className={styles.flex}>
                    <Link href={'/career/commerce'} className={styles.xp_summary}>
                        <ItemSummary 
                            title={'Mon ancienne vie'} 
                            summary={'Ma carrière dans le commerce'} 
                            page={'career'} 
                            id={'commerce'}
                            hovered={hovered === 'commerce' ? hovered : ''}
                            selected={selected === 'commerce' ? selected : ''}
                            // ADD THE EVENTS OBJECT WITH THE ID
                            {...createHandlers('commerce')}
                        />
                    </Link>
                    <Link href={'/career/prep'} className={styles.xp_summary}>
                        <ItemSummary 
                            title={'Début de reconversion'} 
                            summary={'La confirmation de mon nouvel itinéraire'} 
                            page={'career'} 
                            id={'prep'}
                            hovered={hovered === 'prep' ? hovered : ''}
                            selected={selected === 'prep' ? selected : ''}
                            {...createHandlers('prep')}
                        />
                    </Link>
                    <Link href={'/career/training'} className={styles.xp_summary}>
                        <ItemSummary 
                            title={'Formation Développeur web'} 
                            summary={'Le début d\'une nouvelle vie'} 
                            page={'career'} 
                            id={'training'}
                            hovered={hovered === 'training' ? hovered : ''}
                            selected={selected === 'training' ? selected : ''}
                            {...createHandlers('training')}
                        />
                    </Link>
                    <Link href={'/career/goals'} className={styles.xp_summary}>
                        <ItemSummary 
                            title={'Mes objectifs'} 
                            summary={'Des perspectives variées et captivantes'} 
                            page={'career'} 
                            id={'goals'}
                            hovered={hovered === 'goals' ? hovered : ''}
                            selected={selected === 'goals' ? selected : ''}
                            {...createHandlers('goals')}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}