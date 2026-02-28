import type { Skill } from "../types/skill"

type SkillCardProps = Omit<Skill, 'id'>

function SkillCard({ icon, name}: SkillCardProps){
    return(
        <div className='skill-card'>
            <div className="skill_card__icon">
                <img src={icon} alt={name} />
            </div>
            <p className="skill-card__label">{name}</p>
   </div>
    
    )
}

export default SkillCard