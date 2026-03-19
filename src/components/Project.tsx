import type { Project } from "../types/project";

type ProjectProps = Omit <Project,"id">

function Projects ({ imageWebp, imageJpg, name, number, title, descriptions, link, }: ProjectProps){
    return(
        <>
                <article className='project-card'>
            <div className='project-card__image-wrapper'>
                <picture>
                    <source srcSet={imageWebp} type ="image/webp"/>
                    {imageJpg?.[0] && (

                        <img className='project-card__image' 
                        src={imageJpg[0]}
                    srcSet={`
                        ${imageJpg[0]} 400w,
                        ${imageJpg[1]} 600w,
                        ${imageJpg[2]} 800w
                        `} 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        alt={name}
                        loading="lazy"
                        />
                    )}
                </picture>
            </div>
            <div className='project-card__content'>
                <span className='project-card__number'> {number} </span>
                <h3 className='project-card__title'>{title}</h3>
                <p className='project-card__description'> {descriptions}</p>
                <a href="#" className='project-card__link' aria-label='Read more about Crypto Screener Application'>
                 <img src={link || undefined} alt="Read More" />
                </a>
            </div>
        </article>
               
        </>
    )
}

export default Projects;