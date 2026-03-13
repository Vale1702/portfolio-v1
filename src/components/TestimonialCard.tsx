import type { Testimonial } from "../types/testimonial";

type TestimonialCardProps = Omit<Testimonial, "id">

function TestimonialCard ({imageWebp, icon,descriptions, name, role}:TestimonialCardProps){
    return(
        <div className="testimonial-card">
            <div className="testimonial-card__logo">
                <img src={imageWebp} alt={name} />
               <div>{icon} </div> 
            </div>
            <p className="testimonial-card__description">
                {descriptions}
            </p>
            <p className="testimonial-card__name">
                {name}
            </p>
            <p className="testimonial-card__role">
                {role}
            </p>
        </div>
    )
}

export default TestimonialCard