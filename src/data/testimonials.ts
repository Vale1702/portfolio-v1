import type { Testimonial } from "../types/testimonial";
import quote from "../assets/quotes.svg"
export const testimonialData: Testimonial[] = [{
    id :1  ,
    imageJpg : ["https://res.cloudinary.com/dgdwcheja/image/upload/f_webp,w_100/v1774317020/girl_yfp2zt.jpg",
    "https://res.cloudinary.com/dgdwcheja/image/upload/f_webp,w_200/v1774317020/girl_yfp2zt.jpg"
    ] ,
    icon : quote ,
    text : 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.' ,
    name :'Evren Shah'  ,
    role :'Designer'  ,
    },
    {
    id :2  ,
    imageJpg :["https://res.cloudinary.com/dgdwcheja/image/upload/f_webp,w_100/v1774317020/men_ofyawd.png",
   "https://res.cloudinary.com/dgdwcheja/image/upload/f_webp,w_200/v1774317020/men_ofyawd.png",
    ] ,
    icon : quote ,
    text : 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.' ,
    name :'Flora sheen'  ,
    role :'Designer'  ,
    }
]