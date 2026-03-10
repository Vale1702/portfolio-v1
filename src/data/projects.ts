import type { Project } from "../types/project";
import project1Jpg from '../assets/project1Jpg.jpg'
import project1Webp from '../assets/project1Webp.webp'
import project2Jpg from '../assets/project2Jpg.jpg'
import project2Webp from '../assets/project2Webp.webp'
import project3Jpg from '../assets/project3Jpg.jpg'
import project3Webp from '../assets/project3Webp.webp'
import readmore from '../assets/readmore.svg'

export const projectData : Project[] = [
    {
    id:1,
    imageWebp: project1Webp,
    imageJpg: project1Jpg,
    name:"Project1",
    number:"01",
    title:"Crypto Screener Application",
    descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link:readmore
},
    {
    id:2,
    imageWebp: project2Webp,
    imageJpg: project2Jpg,
    name:"Project2",
    number:"02",
    title:"Euphoria - Ecommerce (Apparels) Website Template",
    descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link:readmore
},
{
    id:3,
    imageWebp: project3Webp,
    imageJpg: project3Jpg,
    name:"Project3",
    number:"03",
    title:"Blog Website Template",
    descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book..",
    link:readmore
}
]