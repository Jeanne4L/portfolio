import type { ProjectsType } from '../types/projects'

export const projects: ProjectsType = [
  {
    id: 'hrnet',
    name: 'HRnet',
    desktopImg: [
      '/assets/images/hrnet/desktop1.png',
      '/assets/images/hrnet/desktop2.png'
    ],
    mobileImg: [
      '/assets/images/hrnet/mobile1.png',
      '/assets/images/hrnet/mobile2.png'
    ],
    texts: [],
    tags: ['React'],
    link: '/projects/hrnet',
    date: new Date('2025-05-01')
  },
  {
    id: 'optiqueDesFleurs',
    name: 'Optique des fleurs',
    desktopImg: ['/assets/images/optique-des-fleurs/desktop1.png'],
    mobileImg: ['/assets/images/optique-des-fleurs/mobile1.png'],
    texts: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    ],
    tags: ['Design'],
    link: '/projects/optique-des-fleurs',
    date: new Date('2025-07-01')
  },
  // {
  //   id: 'mute',
  //   name: 'Mute',
  //   desktopImg: [],
  //   mobileImg: ['/assets/images/mute/mobile1.jpg', '/assets/images/mute/mobile2.png'],
  //   texts: [
  //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   ],
  //   tags: ['React Native'],
  //   link: '/projects/mute',
  //   date: new Date('2025-06-01')
  // },
  {
    id: 'kasa',
    name: 'Kasa',
    desktopImg: ['/assets/images/kasa/desktop1.png', '/assets/images/kasa/desktop2.png'],
    mobileImg: [
      '/assets/images/kasa/mobile1.png',
      '/assets/images/kasa/mobile2.png',
      '/assets/images/kasa/mobile3.png'
    ],
    texts: [],
    tags: ['React'],
    link: '/projects/kasa',
    date: new Date('2024-06-01')
  },
  {
    id: 'sportSee',
    name: 'SportSee',
    desktopImg: ['/assets/images/sportsee/desktop1.png', '/assets/images/sportsee/desktop2.png'],
    mobileImg: [
      '/assets/images/sportsee/mobile1.png'
    ],
    texts: [],
    tags: ['React', 'Recharts'],
    link: '/projects/sportsee',
    date: new Date('2024-10-01')
  }
]
