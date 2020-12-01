import React from 'react';

export const errorPagesConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/error-pages/error-404',
        component: React.lazy(() => import('./Error404')),
      },
    ],
  },
];
