import { Link } from 'react-router'

import P from '../components/text/P'
import Span from '../components/text/Span'
import type { ProjectsType } from '../types/projects'

export const projects: ProjectsType = [
  {
    id: 'hrnet',
    name: 'HRnet',
    tagline: 'Saas RH',
    preview: '/assets/images/hrnet/preview.jpg',
    desktopImg: [
      '/assets/images/hrnet/desktop1.jpg',
      '/assets/images/hrnet/desktop2.jpg'
    ],
    mobileImg: [
      '/assets/images/hrnet/mobile1.jpg',
      '/assets/images/hrnet/mobile2.jpg',
      '/assets/images/hrnet/mobile3.jpg',
    ],
    texts: (
      <>
        <P>
          Dans le cadre de ma formation, j'ai mené à bien la <Span bold>refonte</Span> d'un site web initialement développé en jQuery, en le transposant vers une architecture moderne basée sur React.
        </P>
        <P>
          J'ai commencé cette refonte par la <Span bold>conception d'un nouveau design</Span> intuitif et esthétique, j'ai ensuite reproduit les fonctionnalités existantes tout en les optimisant pour une meilleure expérience utilisateur.
        </P>
        <P>
          Pour la gestion des formulaires et la validation des données, j'ai eu recours à React Hook Form combiné à la bibliothèque de validation de schémas Zod. 
        </P>
        <P>
          Afin d'assurer la fiabilité du code, j'ai mis en place des <Span bold>tests unitaires et d'intégration</Span> en utilisant Vitest.
        </P>
        <P>
          Dans un second temps, le projet incluait la <Span bold>migration</Span> d'une <Link to={'/octable'}><Span colored bold style={{ textDecoration: 'underline' }}>librairie de rendu de tableaux</Span></Link> de données.
        </P>
      </>
    ),
    tags: ['React', 'Vitest', 'Design'],
    link: 'hrnet',
    // website: 'https://jeanne4l.github.io/oc-hrnet/',
    repo: 'https://github.com/Jeanne4L/oc-hrnet'
  },
  {
    id: 'ocTable',
    name: 'OC Table',
    tagline: 'Librairie de rendu de tableaux personnalisables',
    preview: '/assets/images/octable/preview.jpg',
    desktopImg: [
      '/assets/images/octable/desktop1.jpg', 
      '/assets/images/octable/desktop2.jpg'
    ],
    mobileImg: [
      '/assets/images/octable/mobile1.jpg', 
      '/assets/images/octable/mobile2.jpg', 
      '/assets/images/octable/mobile3.jpg'
    ],
    texts: (
      <>
        <P>
          Durant ma formation, j'ai développé une librairie React dédiée au rendu de <Span bold>tableaux de données</Span>. Cet outil a été conçu comme un <Span bold>"compound component"</Span> afin de rendre son utilisation plus flexible.
        </P>
        <P>
          La librairie intègre des fonctionnalités telles que le <Span bold>tri</Span>, la <Span bold>pagination</Span>, la <Span bold>recherche filtrée</Span>. Chacun de ces éléments est facultatif et peut être agencé dans l'ordre souhaité.
        </P>
        <P>
          <Span bold>Disponible sur npm</Span>, cette librairie est prête à l'emploi. Le repo associé inclut également une <Span bold>documentation via Storybook</Span> et une suite de <Span bold>tests écrits avec Vitest</Span>, assurant la fiabilité et la maintenabilité du code.
        </P>
      </>
    ),
    tags: ['React', 'Storybook', 'Vitest'],
    link: 'octable',
    website: 'https://www.npmjs.com/package/octable',
    repo: 'https://github.com/Jeanne4L/oc-storybook-table'
  },
]
