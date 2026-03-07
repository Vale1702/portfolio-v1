import type { Project } from "../types/project";
import project1 from '../assets/project1.webp'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import readmore from '../assets/readmore.svg'

export const projectData : Project[] = [
    {
id:1,
icon:project1,
name:"Project1",
number:"01",
title:"Crypto Screener Application",
descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
link:readmore
},
    {
id:2,
icon:project2,
name:"Project2",
number:"02",
title:"Euphoria - Ecommerce (Apparels) Website Template",
descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
link:readmore
},
{
    id:3,
    icon:project3,
    name:"Project3",
    number:"03",
title:"Blog Website Template",
descriptions:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book..",
link:readmore
}
]