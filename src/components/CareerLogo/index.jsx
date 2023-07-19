'use client' 

import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import * as xpActions from '@/redux/features/xpSlice';
import { selectClickedXp, selectHoveredXp } from '@/redux/selectors';
import { useMemo } from 'react';

// CLICKABLE SVG LOGO
export default function CareerLogo() {
    const router = useRouter();
    const dispatch = useDispatch();
    const selected = useSelector(selectClickedXp);
    const hovered = useSelector(selectHoveredXp)

    // CHANGE CLIC GLOBAL STATE TO COLOR LOGO PART AND TEXT AND REDIRECT TO XP PAGE
    function handleClick(e) {
        const id = idMap[e.target.id]

        dispatch(xpActions.clic(id))
        router.push(`/career/${id}`)
    }
    // CHANGE CLIC GLOBAL STATE TO COLOR LOGO PART AND TEXT
    const handleHover = (e) => {
        const id = e ? idMap[e.target.id] : null;
        dispatch(xpActions.hover(id));
    }
    // CHANGE THE ENTER KEY TO CLIC
    function handleKey(e) {
        if (e.keyCode === 13 || e.key === "Enter") {
            handleClick(e)
        }
    }

    // CONVERT ID
    const idMap = useMemo(() => ({
        'commerce_peak': 'commerce',
        'commerce': 'commerce',
        'prep_peak': 'prep',
        'prep': 'prep',
        'training_peak': 'training',
        'training': 'training',
        'goals_peak': 'goals',
        'goals': 'goals'
    }), [])
    // GENERATE CLASS WITH STATE AND ID
    function generateClass(selected, hovered, id) {
        const isActive = selected === id || hovered === id;
        
        return `${isActive ? styles.active : styles.elt}`;
    }
    const commerceClass = generateClass(selected, hovered, 'commerce');
    const prepClass = generateClass(selected, hovered, 'prep');
    const trainingClass = generateClass(selected, hovered, 'training');
    const goalsClass = generateClass(selected, hovered, 'goals');

    return (
        <div className={styles.container}>
            <svg
                width="325"
                height="281.90991"
                viewBox="0 0 85.989588 74.588659"
                version="1.1"
                id="svg5"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
                >
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 0.6214251,42.353219 -0.005908,31.580344 84.66666559,-0.0064 z"
                    id="commerce_peak" className={commerceClass}
                    aria-label='Mon ancienne vie' tabIndex={0}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 77.283365,31.05911 -10.388274,7.455287 c 0,0 17.684412,31.268772 17.716038,31.318762 z"
                    id="prep_peak" className={prepClass}
                    aria-label='Début de reconversion' tabIndex={0}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 16.653593,20.44513 0.06046,25.217194 67.37555,26.119678 z"
                    id="training_peak" className={trainingClass}
                    aria-label='Formation développeur web' tabIndex={0}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 42.799405,0.49241393 c 0,0 -14.694617,25.57703407 -14.733913,25.64881107 l 53.478599,41.782331 z"
                    id="goals_peak" className={goalsClass}
                    aria-label='Mes objectifs' tabIndex={0}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                />
            </svg>
        </div>
    )
}