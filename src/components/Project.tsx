import type { Project } from "../types/project";

type ProjectProps = Omit <Project,"id">

function Projects ({ icon, name, number, title, descriptions, link}: ProjectProps){
    return(
        <>
                <article className='project-card'>
            <div className='project-card__image-wrapper'>
                <picture>
                    <source srcSet={icon} type ="image/web"/>
                    <img className='project-card__image' 
                    src={icon} alt={name}
                    // srcSet="https://res.cloudinary,
                    // https://res.cloudinary,
                    // https://res.cloudinary"
                    loading="lazy"
                    />
                </picture>
            </div>
            <div className='project-card__content'>
                <span className='project-card__number'> {number} </span>
                <h3 className='project-card__title'>{title}</h3>
                <p className='project-card__description'> {descriptions}</p>
                <a href="#" className='project-card__link' aria-label='Read more about Crypto Screener Application'>
                <img src={link} alt="Read More" />

                </a>
            </div>
        </article>
               
        </>
    )
}

export default Projects;