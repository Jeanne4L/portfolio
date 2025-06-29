import type { ProjectsType } from '../types/projects'

export const projects: ProjectsType = [
  {
    id: 'hrnet',
    name: 'HRnet',
    tagline: 'Saas RH',
    desktopImg: [
      '/assets/images/hrnet/desktop1.png',
      '/assets/images/hrnet/desktop2.png'
    ],
    mobileImg: [
      '/assets/images/hrnet/mobile1.png',
      '/assets/images/hrnet/mobile2.png',
      '/assets/images/hrnet/mobile1.png',
    ],
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    ],
    tags: ['React'],
    link: 'hrnet',
    repo: 'https://github.com/Jeanne4L/oc-hrnet'
  },
  {
    id: 'optiqueDesFleurs',
    name: 'Optique des fleurs',
    tagline: 'Site vitrine pour un opticien',
    desktopImg: ['/assets/images/optique-des-fleurs/desktop1.png'],
    mobileImg: ['/assets/images/optique-des-fleurs/mobile1.png'],
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    ],
    tags: ['Design'],
    link: 'optique-des-fleurs',
    website: 'optique-des-fleurs.fr',
  },
  // {
  //   id: 'mute',
  //   name: 'Mute',
  //   tagline: 'Appli de messagerie',
  //   desktopImg: [],
  //   mobileImg: ['/assets/images/mute/mobile1.jpg', '/assets/images/mute/mobile2.png'],
  //   texts: [
  //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   ],
  //   tags: ['React Native'],
  //   link: 'mute',
  //   repo: '',
  // },
  {
    id: 'kasa',
    name: 'Kasa',
    tagline: 'Site de location immobilière',
    desktopImg: ['/assets/images/kasa/desktop1.png', '/assets/images/kasa/desktop2.png'],
    mobileImg: [
      '/assets/images/kasa/mobile1.png',
      '/assets/images/kasa/mobile2.png',
      '/assets/images/kasa/mobile3.png'
    ],
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    ],
    tags: ['React'],
    link: 'kasa',
    website: 'https://oc-kasa-jeanne4l.netlify.app/',
    repo: 'https://github.com/Jeanne4L/oc-kasa'
  },
  {
    id: 'sportSee',
    name: 'SportSee',
    tagline: 'SaaS de suivi sportif',
    desktopImg: ['/assets/images/sportsee/desktop1.png', '/assets/images/sportsee/desktop2.png'],
    mobileImg: [
      '/assets/images/sportsee/mobile1.png'
    ],
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    ],
    tags: ['React', 'Recharts'],
    link: 'sportsee',
    repo: 'https://github.com/Jeanne4L/oc-sportsee-front'
  }
]
