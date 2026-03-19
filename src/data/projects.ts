import type { Project } from "../types/project";
// import project1Jpg from '../assets/project1Jpg.jpg'
import project1Webp from '../assets/project1Webp.webp'
// import project2Jpg from '../assets/project2Jpg.jpg'
import project2Webp from '../assets/project2Webp.webp'
// import project3Jpg from '../assets/project3Jpg.jpg'
import project3Webp from '../assets/project3Webp.webp'
import readmore from '../assets/readmore.svg'

export const projectData : Project[] = [
    {
    id:1,
    imageWebp: project1Webp,
    imageJpg: [
        "https://res.cloudinary.com/dgdwcheja/image/upload/w_400/project1_r7snks.jpg",
        "https://res.cloudinary.com/dgdwcheja/image/upload/w_600/project1_r7snks.jpg",
        "https://res.cloudinary.com/dgdwcheja/image/upload/w_800/project1_r7snks.jpg"
    ],
    name:"Project1",
    number:"01",
    title:"Crypto Screener Application",
    descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link:readmore
},
    {
    id:2,
    imageWebp: project2Webp,
    imageJpg:[
    "https://res.cloudinary.com/dgdwcheja/image/upload/w_400/project2_vd6t9m.jpg",
    "https://res.cloudinary.com/dgdwcheja/image/upload/w_600/project2_vd6t9m.jpg",
    "https://res.cloudinary.com/dgdwcheja/image/upload/w_800/project2_vd6t9m.jpg"],
    name:"Project2",
    number:"02",
    title:"Euphoria - Ecommerce (Apparels) Website Template",
    descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link:readmore
},
{
    id:3,
    imageWebp: project3Webp,
    imageJpg: [
        "https://res.cloudinary.com/dgdwcheja/image/upload/w_400/project3_u4c9l2.jpg",
        "https://res.cloudinary.com/dgdwcheja/image/upload/w_600/project3_u4c9l2.jpg",
        "https://res.cloudinary.com/dgdwcheja/image/upload/w_800/project3_u4c9l2.jpg"
    ],
    name:"Project3",
    number:"03",
    title:"Blog Website Template",
    descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book..",
    link:readmore
}
]