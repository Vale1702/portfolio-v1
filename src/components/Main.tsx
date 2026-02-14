import hero from '../assets/hero.svg'

function Main(){
return(
    <section className='hero'>
        <img src={hero} alt=" Girl working on a laptop" />

        <div className='hero__content'>
            <h1 className='hero__title'> Hello i'm <strong>Flora Sheen </strong> <br/> 
            Fronted <span className='outlined'> Developer </span><br/> base in <strong>India. </strong>
            </h1>
            <p className='hero__description'>
                I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            </p>
        </div>
    </section>
)
}

export default Main;