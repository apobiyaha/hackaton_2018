export default [
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Main.vue')
      },
      {
        path: 'bucket',
        component: () => import('pages/Bucket.vue')
      },
      {
        path: 'addPurchase',
        component: () => import('pages/AddPurchase.vue')
      },
      {
        path: 'cards',
        component: () => import('pages/Cards.vue')
      },
      {
        path: 'history',
        component: () => import('pages/History.vue')
      },
      {
        path: 'schedule',
        component: () => import('pages/Schedule.vue')
      },
      {
        path: 'help',
        component: () => import('pages/Help.vue')
      }
    ]
  }
]
