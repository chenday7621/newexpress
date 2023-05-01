import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage";
import Policy from "@/views/Policy";
import Process from "@/views/Process";
import Info from "@/views/Info";
import Box from "@/views/Process/concrete/Box";
import Filler from "@/views/Process/concrete/Filler";
import Bag from "@/views/Process/concrete/Bag";
import Tape from "@/views/Process/concrete/Tape";
const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/homepage",
    component: Homepage,
  },
  {
    path: "/policy",
    component: Policy,
  },
  {
    path: "/process",
    component: Process,
  },
  {
    path: "/info",
    component: Info,
  },

  {
    path:"/process/tape",
    component:Tape
  },
  {
    path:"/process/bag",
    component:Bag
  },
  {
    path:"/process/box",
    component:Box
  },
  {
    path:"/process/filler",
    component:Filler
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
