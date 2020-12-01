import React from 'react';

export const samplePagesConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-1',
        component: React.lazy(() => import('./Pages/PageOne')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-2',
        component: React.lazy(() => import('./Pages/PageTwo')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-3',
        component: React.lazy(() => import('./Pages/PageThree')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-4',
        component: React.lazy(() => import('./Pages/PageFour')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-5',
        component: React.lazy(() => import('./Pages/PageFive')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-6',
        component: React.lazy(() => import('./Pages/PageSix')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-',
        component: React.lazy(() => import('./Pages/PageOne')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-8',
        component: React.lazy(() => import('./Pages/PageEight')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-1',
        component: React.lazy(() => import('./Pages/PageOne')),
      },
    ],
  },
];
