import React from 'react'
import Header from '../Header/Header.jsx'
import Titles from '../Home/Titles.jsx'
import SlantedText from '../../SlantedText.jsx'
import Title from './Title.jsx'
import Footer from '../Footer/Footer.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
// import {Outlet} from 'react-router-dom'

function Abouthim() {
  return (
    <>
    
    
    <Header themeText="black" themeSecondary='white'/>
    <div className='w-full bg-center bg-no-repeat bg-cover bg-blend-darken bg-half-black' style={{backgroundImage: `url(src/assets/profile-him.jpg)`, height:"65vh"}}>
    
        <Title heading={"GERRARD LEANDRO"}/>
    </div>

    <section>
      <div className="bg-white w-screen h-auto">
        <div className='flex flex-col text-center justify-center items-center'>
          <div className="h-32 w-32 bg-white rounded-full outline-1 shadow-md shadow-half-black flex flex-row justify-center items-center -mt-16">
            <FontAwesomeIcon icon={faQuoteLeft} size='4x' color='#00000070'/>
          </div>
        <div className="columns-2 flex flex-wrap w-4/6 gap-x-10 gap-y-5 justify-center my-20 text-sm" style={{color:"#00000090"}}>
          <p className='w-2/5 text-justify h-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, deleniti debitis? Quis inventore consequatur consequuntur id quae fugiat deleniti, dignissimos est aspernatur, dolorem placeat! Voluptatibus fuga deleniti et ipsam amet error sit ipsum laborum minima, libero tempora asperiores consequuntur, earum vero adipisci beatae velit iste sunt explicabo officia? Nisi, adipisci.</p>
          <p className='w-2/5 text-justify h-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam minima corrupti cum, repudiandae hic neque molestiae suscipit dignissimos assumenda dolorum aspernatur fuga sunt laborum modi adipisci quia inventore praesentium.</p>
          <p className='w-2/5 text-justify h-auto flex-wrap'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui repellendus unde cumque magni illum id vitae, quo, doloribus voluptates esse, ut ducimus nobis sit? Aut omnis veritatis fugit iste exercitationem accusamus non rerum libero similique?</p>
          <p className='w-2/5 text-justify h-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora in, ullam tempore sequi nobis molestiae aspernatur odit. Officiis maiores veritatis modi recusandae vitae? Delectus, error corrupti commodi quasi ab rem.</p>
        </div>
        </div>
      </div>
    </section>

    <Footer img='src/assets/footer-image-him.jpg'/>
    </>
  )
}

export default Abouthim