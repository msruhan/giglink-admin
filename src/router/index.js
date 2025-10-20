import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/beranda",
    name: "index",
    component: () => import('@/pages/index/index.vue'),
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import('@/pages/explore-item/explore.vue'),
  },
  {
    path: "/item-detail",
    name: "item-details",
    component: () => import('@/pages/explore-item/item-detail.vue'),
  },
  {
    path: "/item-detail/:id",
    name: "item-detail",
    component: () => import('@/pages/explore-item/item-detail.vue'),
  },
  {
    path: "/product-list",
    name: "product-list",
    component: () => import('@/pages/explore-item/product-list.vue'),
  },
  {
    path: "/product-detail",
    name: "product-details",
    component: () => import('@/pages/explore-item/parent-product.vue'),
  },
  {
    path: "/product-detail/:id",
    name: "product-detail",
    component: () => import('@/pages/explore-item/parent-product.vue'),
  },
  {
    path: "/upload-product",
    name: "upload-product",
    component: () => import('@/pages/explore-item/upload-product.vue'),
  },
    {
    path: "/license-list",
    name: "license-list",
    component: () => import('@/pages/explore-item/license-list.vue'),
  },
  {
    path: "/license-detail",
    name: "license-details",
    component: () => import('@/pages/explore-item/parent-license.vue'),
  },
  {
    path: "/license-detail/:id",
    name: "license-detail",
    component: () => import('@/pages/explore-item/parent-license.vue'),
  },
  {
    path: "/upload-license",
    name: "upload-license",
    component: () => import('@/pages/explore-item/upload-license.vue'),
  },
  {
    path: "/upload-work",
    name: "upload-work",
    component: () => import('@/pages/explore-item/upload-work.vue'),
  },
  {
    path: "/auction",
    name: "live-auction",
    component: () => import('@/pages/live-auction.vue'),
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import('@/pages/wallet.vue'),
  },
  {
    path: "/collection",
    name: "collection",
    component: () => import('@/pages/collection.vue'),
  },
  {
    path: "/creators",
    name: "creators",
    component: () => import('@/pages/creators/creators.vue'),
  },
  {
    path: "/workshop",
    name: "workshop",
    component: () => import('@/pages/creators/list-workshop.vue'),
  },
  {
    path: "/technician",
    name: "technician",
    component: () => import('@/pages/creators/list-technician.vue'),
  },
  {
    path: "/user-list",
    name: "user-list",
    component: () => import('@/pages/creators/list-user.vue'),
  },
  {
    path: "/creator-profile",
    name: "creator-profile",
    component: () => import('@/pages/creators/creator-profile.vue'),
  },
  {
    path: "/creator-profile-setting",
    name: "creator-profile-setting",
    component: () => import('@/pages/creators/creator-profile-setting.vue'),
  },
  {
    path: "/become-creator",
    name: "become-creator",
    component: () => import('@/pages/creators/become-creator.vue'),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import('@/pages/blog/blog.vue'),
  },
  {
    path: "/blog-detail",
    name: "blog-details",
    component: () => import('@/pages/blog/blog-detail.vue'),
  },
  {
    path: "/blog-detail/:id",
    name: "blog-detail",
    component: () => import('@/pages/blog/blog-detail.vue'),
  },
  {
    path: "/starter",
    name: "starter",
    component: () => import('@/pages/pages/starter.vue'),
  },
  {
    path: "/faqs",
    name: "faqs",
    component: () => import('@/pages/pages/faqs.vue'),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import('@/pages/pages/privacy.vue'),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import('@/pages/pages/terms.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/pages/auth-pages/login.vue'),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('@/pages/auth-pages/signup.vue'),
  },
  {
    path: "/signup-success",
    name: "signup-success",
    component: () => import('@/pages/auth-pages/signup-success.vue'),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import('@/pages/auth-pages/reset-password.vue'),
  },
  {
    path: "/lock-screen",
    name: "lock-screen",
    component: () => import('@/pages/auth-pages/lock-screen.vue'),
  },
  {
    path: "/comingsoon",
    name: "comingsoon",
    component: () => import('@/pages/miscellaneous/comingsoon.vue'),
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: () => import('@/pages/miscellaneous/maintenance.vue'),
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: () => import('@/pages/miscellaneous/thankyou.vue'),
  },
  {
    path: "/:error(.*)",
    name: "error",
    component: () => import('@/pages/miscellaneous/error.vue'),
  },
  {
    path: "/edit-product/:id",
    name: "edit-product",
    component: () => import('@/pages/explore-item/edit-product.vue'),
  },
  {
    path: "/edit-license/:id",
    name: "edit-license",
    component: () => import('@/pages/explore-item/edit-license.vue'),
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Redirect root to /login
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/login');
  } else {
    next();
  }
});

export default router;