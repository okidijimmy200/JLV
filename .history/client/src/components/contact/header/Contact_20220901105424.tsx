import React, {useState} from 'react'
import Nav from '../../Nav'
import Footer from '../footer/Footer'
import Forms from '../form/Form'
import './Contact.scss'
import {GoLocation} from 'react-icons/go'
import {
  AiOutlineMail, 
  AiOutlineWhatsApp, 
  AiFillFacebook, 
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram} from 'react-icons/ai'

export default function Contact() {
  const [loading, setLoading] = useState()
  return (
    <>
        <header className="header-about--contact">
        <div className='header-about__section--contact'>
            <Nav />
          <div className='contact'>
            <div className='contact__map'>
              <div className='contact__map--pic'>
                {/* eslint-disable-next-lin */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757658848743!2d32.58331401395134!3d0.315949864114518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8080541c6d%3A0x7ccde31c7b48888!2sOffice%20of%20the%20Auditor%20General%2C%20Uganda%20(Supreme%20Audit%20Institution)!5e0!3m2!1sen!2sug!4v1659954549659!5m2!1sen!2sug" width="576" height="347" style={{border:0}} title="myFrame"></iframe>
              </div>
              <div className='contact__map--detail'>
                <div className='heading-tetiary heading--title'>
                  <h2>Contact Us</h2>
                </div>
                <div className='locations'>
                  <ul className='locations__ul'>
                    <li><GoLocation /> Rubaga Sub-County - 18km from Biharwe</li>
                    <li> <AiOutlineMail /> hello@jlventureprises.com</li>
                    <li><AiOutlineWhatsApp /> +256 700 899 265</li>
                  </ul>
                </div>
                <div className='contact__icons'>
                  <div ><AiFillFacebook color="#225901" fontSize="2rem"/></div>
                  <div><AiFillLinkedin color="#225901" fontSize="2rem"/></div>
                  <div><AiFillTwitterCircle color="#225901" fontSize="2rem"/></div>
                  <div><AiFillInstagram color="#225901" fontSize="2rem"/></div>
                  <div><AiFillYoutube color="#225901" fontSize="2rem"/></div>    
                  
            </div>
              </div>
            
    </div>
    <div className='contact__form'>
      <Forms />
      <div className='contact__footer'>
        <div className='contact__footer__box'>
          <div className='contact__footer__box--text'>For Our Service Booking</div>
        </div>
        <div className='contact__footer__btn'>
        <div className='contact__footer__box--text'>Click Here</div>
        </div>
      </div>

    </div>
            </div>
        </div>
    </header>
    <Footer />
    </>
  )
}
