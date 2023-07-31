// import experiences from '@/data/career.json';
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import Tag from '@/components/Tag';
import XpStateReset from '@/components/XpStateReset';
import Button from '@/components/Button';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// METADATA
export let metadata = {
    title: `Sandra Petereau | `,
    description: '',
    robots: {
		index: true,
		follow: false,
		nocache: false,
	},
}

export default function CareerXP({ params }) {
    const experiences = [
        {
            "id": "commerce",
            "title": "Mon ancienne vie",
            "description": 'J\'ai commencé ma carrière dans le commerce, je vous explique tout ici.',
            "softSkills": ["collaboration", "proactivité", "réactivité", "polyvalence"]
        },
        {
            "id": "prep",
            "title": "Début de reconversion",
            "description": 'Le développement web est devenu une vraie passion depuis que j\'ai testé sur mon temps libre. Voici ma reconversion.',
            "softSkills": ["autonomie", "introspection", "rigueur", "initiative"]
        },
        {
            "id": "training",
            "title": "Formation Développeur web",
            "description": 'Le développement web est devenu une vraie passion depuis que j\'ai testé sur mon temps libre. Voici ma reconversion.',
            "softSkills": ["détermination", "curiosité", "organisation", "adaptabilité"]
        },
        {
            "id": "goals",
            "title": "Mes objectifs",
            "description": 'Aujourd\'hui diplômée en tant que développeuse web, je ne veux plus m\'arrêter. Découvrez mes nouveaux objectifs.',
        }
    ]
    const xp = experiences.find((xp) => xp.id === params.id);

    if(!xp) {
        notFound();
    } else {
        metadata.title = `Sandra Petereau | ${xp.id}`;
        metadata.description = xp.description;
        
        return(
            <>
                <XpStateReset/>

                <div className={`container ${styles.container}`}>
                    <h1 className={styles.h1}>{xp.title}</h1>
                    
                    <div className={`${styles.paragraph} ${xp.softSkills ? '' : styles.margin}`}>
                        {xp.id === 'commerce' && 
                            <>
                                <p className={styles.text}>
                                    Après des débuts chaotiques en filière ES, j&apos;ai choisi de me tourner vers une voie professionnelle: le <span className={styles.hightlight}>commerce</span>. La polyvalence étant le maître-mot durant ces deux années d&apos;alternance à Super U, mon côté couteau suisse s&apos;est pleinement épanoui à travers la préparation de commandes, la vente de gaz ou encore la location de véhicules.
                                </p>
                                <p className={styles.text}>
                                    Puis, une fois mon bac en poche, j&apos;ai continué sur ce chemin tout tracé jusqu&apos;à <span className={styles.hightlight}>La Foir&apos;Fouille</span>, <span className={styles.hightlight}>Centrakor</span> puis <span className={styles.hightlight}>Biocoop</span>. J&apos;ai également fait quelques escales chez <span className={styles.hightlight}>St-Michel</span>, <span className={styles.hightlight}>Marco Polo</span>, et <span className={styles.hightlight}>Center Parcs</span> pour lesquels j&apos;ai monté quelques cartons et nettoyé quelques cottages.
                                </p>
                                <p className={styles.text}>
                                    Ces expériences m&apos;ont permis de grandir (dans la tête uniquement!) et d&apos;apprendre afin de façonner ce projet professionnel encore flou à l&apos;époque de mes études.
                                </p>
                            </>
                        }
                        {xp.id === 'prep' && 
                            <>
                                <p className={styles.text}>
                                    Plus jeune je n&apos;aimais pas apprendre, je trouvais les cours inutiles et rébarbatifs. J&apos;ai bien changé depuis! Maintenant je ne fais plus que ça, j&apos;ai une liste de sujets à explorer si longue qu&apos;il me faudra plus d&apos;une vie pour la parcourir. Sur cette liste se trouvait encore, il y a quelques temps, la <span className={styles.hightlight}>programmation informatique</span>. Je n&apos;aurais jamais cru accrocher autant. Et pourtant, de nombreux langages, librairies et frameworks sont venus l&apos;allonger un peu plus.
                                </p>
                                <p className={styles.text}>
                                    J&apos;ai donc commencé à apprendre le code toute seule, en suivant des cours ici et là, sur internet. Puis une occasion s&apos;est présentée à moi via le site d&apos;<span className={styles.hightlight}>Openclassrooms</span>. Un programme de 4 mois me permettant d&apos;apprendre les bases en les appliquant sur des projets concrets. J&apos;y ai réalisé <span className={styles.hightlight}>4 projets</span>, dont Ohmyfood ( les autres ne sont pas sur le portfolio car le code me semble aujourd&apos;hui bien moins bon qu&apos;à l&apos;époque. Ils sont, par contre, visibles sur mon Github<Button externLink={'https://github.com/Jeanne4L'} ariaLabel={'Aller sur mon GitHub'}/>). Cette formation m&apos;a apporté la confimation que je ne m&apos;étais pas trompée en entamant cette reconversion.
                                </p>
                            </>
                        }
                        {xp.id === 'training' && 
                            <>
                                <p className={styles.text}>
                                    Consciente qu&apos;une reconversion dans l&apos;informatique sans expérience et sans diplôme n&apos;était pas envisageable, j&apos;ai intégré une formation continue dont l&apos;issue me délivrerait un <span className={styles.hightlight}>titre RNCP de niveau 5 (Bac+2)</span>. Au cours de ces 4 mois, j&apos;ai réalisé <span className={styles.hightlight}>7 projets</span> dont l&apos;un d&apos;eux est le portfolio sur lequel vous êtes actuellement.
                                </p>
                                <p className={styles.text}>
                                    Ces projets m&apos;ont permis de consolider mes bases (<span className={styles.hightlight}>HTML, CSS, JS</span>) et d&apos;acquérir de nouvelles connaissances. Parmi celles-ci, les méthodes <span className={styles.hightlight}>agiles</span> dont <span className={styles.hightlight}>SCRUM</span> et les tableaux <span className={styles.hightlight}>kanban</span> que j&apos;ai appliqués sur le projet MenuMaker. Celui-ci consistait à la planification des étapes nécessaires à la  création d&apos;un site. J&apos;ai également appris à utiliser des librairies et frameworks tels que <span className={styles.hightlight}>React</span>, <span className={styles.hightlight}>Next.js</span>, <span className={styles.hightlight}>Redux</span> ou <span className={styles.hightlight}>Express.js</span>.
                                </p>
                                <p className={styles.text}>
                                    Mais avez-vous déjà remarqué que, à mesure que l&apos;on découvre un sujet, on prend également conscience de l&apos;étendue de notre ignorance? Comme l&apos;a dit Socrate &quot;Je sais que je ne sais rien&quot;. Je me suis ainsi rendue compte au cours de cette formation qu&apos;elle ne serait pas suffisante. Bien que j&apos;aurais pu la terminer plus tôt, j&apos;ai donc choisi d&apos;en retarder l&apos;issue afin d&apos;en apprendre plus de mon mentor. Nous avons ainsi pu explorer l&apos;environnement <span className={styles.hightlight}>Linux</span>, <span className={styles.hightlight}>Docker</span> et la planification d&apos;un projet sur GitHub<Button externLink={'https://github.com/users/Jeanne4L/projects/4/views/1'} ariaLabel={'Voir le kanban du portfolio'}/>.
                                </p>
                            </>
                        }
                        {xp.id === 'goals' && 
                            <>
                                <p className={styles.text}>
                                    Il est difficile d&apos;avoir un objectif final dans un domaine en constante évolution et qui offre tant de perspectives alors je dirais que mon intention est d&apos;en apprendre le plus possible et de réussir en tant que développeuse.
                                </p>
                                <p className={styles.text}>
                                    Pour cela, je souhaite intégrer une autre formation afin de me spécialiser. Mon premier choix est une <span className={styles.hightlight}>spécialisation frontend</span> sur <span className={styles.hightlight}>React</span> ou un autre framework (<span className={styles.hightlight}>Vue.js</span>, <span className={styles.hightlight}>Angular</span>...).
                                </p>
                                <p className={styles.text}>
                                    Cependant, je pense qu&apos;il est important de ne pas se limiter en restant focalisé sur un objectif trop spécifique. C&apos;est pourquoi j&apos;envisage également de dévier vers le développement d&apos;applications <span className={styles.hightlight}>Android</span> si l&apos;occasion se présente.
                                </p>
                            </>
                        }
                    </div>
                    
                    {xp.softSkills && 
                        <div className={styles.tags}>
                            {xp.softSkills.map((skill, index) => (
                                <Tag text={skill} page={'career'} key={`${xp.id}--${index}-${Date.now()}`}/>
                            ))}
                        </div>
                    }

                    <div className={styles.footer}>
                        <a href='/CV_Petereau_Sandra.pdf' download className={styles.download} aria-label='Télécharger le cv au format pdf'>
                            Télécharger mon cv
                            <BsFillCloudArrowDownFill className={styles.icon}/>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}