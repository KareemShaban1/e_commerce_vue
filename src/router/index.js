import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category/:title",
    name: "products_category",
    component: () => import("@/views/ProductsCategory.vue"),
  },
  {
    path: "/products/product-details/:productId",
    name: "product_details",
    component: () => import("@/views/ProductDetails.vue"),
  },

  {
    path: "/cart-page",
    name: "cart-page",
    component: () => import("@/views/CartPage.vue"),
  },

  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/CheckOut.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
