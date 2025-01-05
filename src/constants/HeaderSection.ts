import type { Link } from '@/types/HeaderLinks.ts'
import {ref} from "vue";

 const links: Link[] = [
  {
    path: '/',
    label: "home",
  },

  {
    path: '/services',
    label: "services",
  },

  {
    path: '/products',
    label: "products",
  },
  {
    path: '/about-us',
    label: "about us",
  },
  {
    path: '/contact',
    label: "contact",
  },
]

const langContents = ref([
    {
        title: 'uz',
        img: new URL('@/assets/icons/uz-4x3.svg', import.meta.url).href,
    },
    {
        title: 'en',
        img: new URL('@/assets/icons/gb-4x3.svg', import.meta.url).href,
    },
]);


export {links, langContents};