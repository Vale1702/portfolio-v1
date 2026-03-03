import type { AboutMe } from "../types/aboutme";

type AboutProps = Omit <AboutMe, 'id'>

function Aboutme( {icon, name, index, text}: AboutProps){
    return(
    <div className="about__content">
        <div className="about__image-wrapper">
            <img className="about__image" src={icon} alt={name} />
            </div>
            <h2 className="section-title about__title "> About  <strong> Me </strong> </h2>
            <div className="about__text">
            <p key={index}>{text}</p>
            </div>
        </div>
    
    )
}

export default Aboutme