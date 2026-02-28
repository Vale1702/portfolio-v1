import type { Experience } from "../types/experience";
import google from '../assets/google.svg'
import youtube from '../assets/youtube.svg'
import apple from '../assets/apple.svg'

export const experienceData :Experience[] = [
    {id:1, icon: google, 
    name:'Google', 
    role: 'Desarrollador',
    date: 'Jan 2017 - Oct 2019' , 
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque totam maiores, maxime modi vel odit magnam quos enim. Numquam, impedit laborum quam corrupti mollitia atque veniam fugiat beatae aspernatur?'},
    {id:2, 
    icon: youtube, 
    name:'Youtube', 
    role: 'Desarrollador' , 
    date: 'Jan 2017 - Oct 2019' , 
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque totam maiores, maxime modi vel odit magnam quos enim. Numquam, impedit laborum quam corrupti mollitia atque veniam fugiat beatae aspernatur?'},
    {id:3, 
    icon: apple, 
    name:'Apple', 
    role: 'Desarrollador', 
    date: 'Jan 2017 - Oct 2019', 
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque totam maiores, maxime modi vel odit magnam quos enim. Numquam, impedit laborum quam corrupti mollitia atque veniam fugiat beatae aspernatur?'}


]