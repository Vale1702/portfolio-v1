import type { Testimonial } from "../types/testimonial";

type TestimonialCardProps = Omit<Testimonial, "id">

function TestimonialCard ({imageWebp, icon, text, name, role}:TestimonialCardProps){
    return(
        <div className="testimonial-card group">
            <div className="testimonial-card__header">
                <picture className="testimonial-card__logo">
                    <source 
                    type ="image/webp"
                    />
                    <img src={imageWebp} alt={name} className="testimonial-card__avatar"
                    loading="lazy"/>
                </picture>
                <img src={icon} alt="Quote" className="testimonial-card__quote-icon" 
                /> 
            </div>

            <p className="testimonial-card__text">
                {text}
            </p>
            <div className="testimonial-card__footer">
            <h3 className="testimonial-card__name">
                {name}
            </h3>
            <p className="testimonial-card__role">
                {role}
            </p>
            </div>
        </div>
    )
}

export default TestimonialCard