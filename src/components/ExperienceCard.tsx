import type { Experience } from "../types/experience"

type ExperienceCardProps = Omit<Experience, 'id'>


function ExperienceCard ({icon, name, role, date, description}: ExperienceCardProps){
return(
    <div className="experience-card">
            <div className="experience-card__logo">
                <img src={icon} alt={name} />
            </div>
        <h3 className="experience-card__role">
            {role}
        </h3>
        <p className="experience-card__date">{date}</p>
        <p className="experience-card__description">
            {description}
        </p>
        </div>
)
}

export default ExperienceCard