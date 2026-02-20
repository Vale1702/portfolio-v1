import hero from '../assets/hero.svg'
import facebook from '../assets/facebook.svg'
import reddit from '../assets/reddit.svg'
import discord  from '../assets/discord.svg'
import twitter from '../assets/twitter.svg'

function Main(){
return(
    <main>

    <section className='hero'>
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

    </section>
    <section className="skills"></section>
    </main>
)
}

export default Main;