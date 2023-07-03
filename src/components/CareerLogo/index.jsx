'use client' 

import styles from './index.module.css'

export default function CareerLogo({logoClickedId}) {

    function handleClick(e) {
        let id = e.target.id;

        logoClickedId(id)
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
                    id="commerce_peak" className={styles.elt} 
                    onClick={handleClick}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 77.283365,31.05911 -10.388274,7.455287 c 0,0 17.684412,31.268772 17.716038,31.318762 z"
                    id="prep_peak" className={styles.elt}
                    onClick={handleClick}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 16.653593,20.44513 0.06046,25.217194 67.37555,26.119678 z"
                    id="training_peak" className={styles.elt}
                    onClick={handleClick}
                />
                <path
                    style={{fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 0.2, strokeLinecap: 'round', strokeMiterlimit: 0, strokeDasharray: 'none', strokeOpacity: 1, paintOrder: 'fill markers stroke' }}
                    d="m 42.799405,0.49241393 c 0,0 -14.694617,25.57703407 -14.733913,25.64881107 l 53.478599,41.782331 z"
                    id="goals_peak" className={styles.elt}
                    onClick={handleClick}
                />
            </svg>
        </div>
    )
}