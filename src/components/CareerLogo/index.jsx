'use client' 

import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import * as xpActions from '@/redux/features/xpSlice';
import { selectClickedXp, selectHoveredXp, selectTheme } from '@/redux/selectors';

export default function CareerLogo() {
    const router = useRouter();
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme)
    const selected = useSelector(selectClickedXp);
    const hovered = useSelector(selectHoveredXp)

    function changeId(id) {
        if (id === 'commerce_peak' || id === 'commerce') {
            return 'commerce';
        } else if (id === 'prep_peak' || id === 'prep') {
            return 'prep';
        } else if (id === 'training_peak' || id === 'training') {
            return 'training';
        } else if (id === 'goals_peak' || id === 'goals') {
            return 'goals';
        }
    }
    function handleClick(e) {
        let id = e.target.id
        id = changeId(id);

        dispatch(xpActions.clic(id))
        router.push(`/career/${id}`)
    }
    function handleHover(e) {
        if(e === null) {
            dispatch(xpActions.hover(null))
        } else {
            let id = e.target.id
            id = changeId(id);
            dispatch(xpActions.hover(id))
        }
    }
    function handleKey(e) {
        if (e.keyCode === 13 || e.key === "Enter") {
            handleClick(e)
        }
    }

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
                    id="commerce_peak" 
                    className={`${selected === 'commerce' || hovered === 'commerce' ? styles.active : styles.elt} 
                        ${selected === 'commerce' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                        ${hovered === 'commerce' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                    `}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                    aria-label='Mon ancienne vie' tabIndex={0}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 77.283365,31.05911 -10.388274,7.455287 c 0,0 17.684412,31.268772 17.716038,31.318762 z"
                    id="prep_peak"
                    className={`${selected === 'prep' || hovered === 'prep' ? styles.active : styles.elt} 
                        ${selected === 'prep' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                        ${hovered === 'prep' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                    `}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                    aria-label='Début de reconversion' tabIndex={0}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 16.653593,20.44513 0.06046,25.217194 67.37555,26.119678 z"
                    id="training_peak"
                    className={`${selected === 'training' || hovered === 'training' ? styles.active : styles.elt} 
                        ${selected === 'training' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                        ${hovered === 'training' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                    `}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                    aria-label='Formation développeur web' tabIndex={0}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 42.799405,0.49241393 c 0,0 -14.694617,25.57703407 -14.733913,25.64881107 l 53.478599,41.782331 z"
                    id="goals_peak" 
                    className={`${selected === 'goals' || hovered === 'goals' ? styles.active : styles.elt} 
                        ${selected === 'goals' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                        ${hovered === 'goals' && theme === 'dark' ? styles.dark_mode_active : styles.elt}
                    `}
                    onClick={handleClick} onMouseOver={handleHover} onMouseOut={() => handleHover(null)} 
                    onFocus={handleHover} onKeyDown={handleKey}
                    aria-label='Mes objectifs' tabIndex={0}
                />
            </svg>
        </div>
    )
}