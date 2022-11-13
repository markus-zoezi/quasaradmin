const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'customers', component: () => import('pages/CustomersPage.vue') },
      { path: 'staffs', component: () => import('pages/StaffsPage.vue') },
      { path: 'schedule', component: () => import('pages/SchedulePage.vue') },
      {
        path: 'statistics',
        component: () => import('pages/StatisticsPage.vue'),
      },
      { path: 'economy', component: () => import('pages/EconomyPage.vue') },
      { path: 'checkout', component: () => import('pages/CheckoutPage.vue') },
      { path: 'messages', component: () => import('pages/MessagesPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
