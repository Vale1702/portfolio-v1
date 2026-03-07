import hero from '../assets/hero.svg'
import facebook from '../assets/facebook.svg'
import reddit from '../assets/reddit.svg'
import discord  from '../assets/discord.svg'
import twitter from '../assets/twitter.svg'
import SkillCard from './SkillCard'
import ExperienceCard from './ExperienceCard'
import { skillsData } from '../data/skills'
import { experienceData } from '../data/experiences'
import {aboutData} from '../data/about-me'
import Aboutme from './AboutMe'
import { projectData } from '../data/projects'
import Projects from './Project'


function Main(){

return(
    <main>

    <section className="section-container">
        <div className= 'hero'>
        <img className='hero__image' src={hero} alt=" Girl working on a laptop" />

            <div className='hero__content'>
                <h1 className='hero__title'> Hello i'm <strong>Flora Sheen </strong> <br/> 
                Fronted <span className='outlined'> Developer </span><br/> base in <strong>India. </strong>
                </h1>
                    <p className='hero__description'>
                        I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                    </p>
                <div className='hero__social'>
                    <a href="#" className='social__link' aria-label='facebook'>
                        <img  src={facebook} alt=" Social" />
                    </a>
                    <a href="#" className='social__link' aria-label='Reddit'>
                        <img  src={reddit} alt=" Social" />
                    </a>
                    <a href="#" className='social__link' aria-label='discord'>
                        <img  src={discord} alt=" Social" />
                    </a>
                    <a href="#" className='social__link' aria-label='twitter'>
                        <img  src={twitter} alt=" Social" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <section className="skills" id="skills">
        <div className="section-container">
            <h2 className='skills__title section-title'>My <strong> Skills </strong></h2>
            <div className='skills__grid'>
                {skillsData.map((skill) =>(
                    <SkillCard
                    key={skill.id}
                    icon ={skill.icon}
                    name = {skill.name}
                    />
                ))}
            </div>
        </div>
    </section>   

    <section className="experience" id='experience'>
        <div className="section-container">
            <h2 className="experience__title section-title"> My <strong> Experience</strong></h2>
            <div className='experience-container'> 
                {experienceData.map((experience) => ( 
                    <ExperienceCard
                    key={experience.id}
                    icon={experience.icon} 
                    name={experience.name} 
                    role={experience.role}
                    date={experience.date} 
                    description={experience.description}        
                    />))}
            </div>
        </div>
    </section>

    <section className='about' id='about'>
        <div className='section-container about__container'>
                {aboutData.map((about, index) =>(
                    <Aboutme
                    key={index}
                    icon={about.icon}
                    name={about.name}
                    descriptions={about.descriptions}
                    />
                ))}
        </div>
    </section>

    <section className='projects' id='projects'>
        <div className='section-container'>
            <h2 className='section-title'> My <strong>Projects </strong></h2>
            <div className="project-list">

                {projectData.map((project)=>(
                    <Projects
                    key={project.id}
                    icon={project.icon} 
                    name={project.name} 
                    number={project.number}
                    title={project.title} 
                    descriptions={project.descriptions}
                    link={project.link}
                    />
                ))}
                </div>
        </div>
    </section>
    </main>
)
}

export default Main;