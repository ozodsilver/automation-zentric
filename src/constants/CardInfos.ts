import {shallowReactive} from "vue";
import type {CardInfo} from "@/types/CardTypes.ts";

const cardInfos = shallowReactive<CardInfo[]>([
    {
        img: new URL('@/assets/images/our-development.jpg', import.meta.url).href,
        title: 'Sowtware Development',
        path:'/development',
        description: 'Description 1',
    },
    {
        img: new URL('@/assets/images/our-cloud.jpg', import.meta.url).href,
        title: 'Cloud technologies',
        path:'/technologies',
        description: 'Description 2',
    },
    {
        img: new URL('@/assets/images/solution-architecture.webp', import.meta.url).href,
        title: 'Solution Architecture',
        path:'/solutions',
        description: 'Description 3',
    },
    {
        img: new URL('@/assets/images/agile-transformation.webp', import.meta.url).href,
        title: 'agile transformation',
        path:'/agile',
        description: 'Description 4',
    },
]);

export  {cardInfos}