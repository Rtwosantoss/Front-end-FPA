import { createRouter, createWebHistory } from "vue-router";
import MaisVendidosView from "../views/MaisVendidosView.vue";
import ProductView from "../views/ProductView.vue";
import CategoriaView from "../views/CategoriaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductView,
    },
    {
      path: "/maisvedidos",
      name: "maisvedidos",
      component: MaisVendidosView,
    },
    {
      path: "/categoria",
      name: "categoria",
      component: CategoriaView
    },
  ],
});

export default router;
