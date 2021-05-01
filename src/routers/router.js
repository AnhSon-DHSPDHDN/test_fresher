import React from 'react'

const router = [
  {
    path: '/home',
    component: React.lazy(() => import('../pages/Home')),
    exact: true
  },
  {
    path: '/home/:id',
    component: React.lazy(() => import('../pages/Details')),
    exact: true
  },
  {
    path: '/login',
    component: React.lazy(() => import('../pages/Login')),
    exact: true
  },
];

export default router;