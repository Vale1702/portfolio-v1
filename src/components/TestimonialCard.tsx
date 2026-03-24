import type { Testimonial } from "../types/testimonial";

type TestimonialCardProps = Omit<Testimonial, "id">

function TestimonialCard ({imageJpg, icon, text, name, role}:TestimonialCardProps){
    
    return(
        <div className="testimonial-card group">
            <div className="testimonial-card__header">
                <picture className="testimonial-card__logo">
                    <source/>
                    {imageJpg?.[0] && (

                        <img src={imageJpg[0]} 
                        alt={name} className="testimonial-card__avatar"
                        loading="lazy"
                        srcSet={`
                            ${imageJpg[0]} 100w,
                            ${imageJpg[1]} 200w
                            `}
                            sizes="(max-width: 768px) 100px, 200px"
                            />
                        )}
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