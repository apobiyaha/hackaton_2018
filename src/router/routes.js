export default [
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/',
    component: () => import('pages/SignIn.vue')
  },
  {
    path: '/app',
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
        path: 'add-item',
        component: () => import('pages/AddItem.vue')
      },
      {
        path: 'settings',
        component: () => import('pages/Settings.vue')
      },
      {
        path: 'schedule',
        component: () => import('pages/Schedule.vue')
      },
      {
        path: 'sale',
        component: () => import('pages/Sale.vue')
      },
      {
        path: 'discount-cards',
        component: () => import('pages/DiscountCards.vue')
      },
      {
        path: 'qr',
        component: () => import('pages/Qr.vue')
      },
      {
        path: 'help',
        component: () => import('pages/Help.vue')
      }
    ]
  }
]
