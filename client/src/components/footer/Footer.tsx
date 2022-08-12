import React from 'react'
import {
  AiOutlineMail, 
  AiOutlineWhatsApp,
  AiFillFacebook, 
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='section-footer'>
      <div className='Footer'>
        <div className='Footer__part1'>
          <div className='Footer__about'>
            <div className=''>
              <h2>JLV Mixed Farm</h2>
            </div>
            <div className='Footer__detail'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id aut commodi pariatur maiores numquam eaque magni dolore, quasi eligendi odio fuga deleniti quisquam.</p>
            </div>
          </div>
          <div className='Footer__bullets'>
            <div className=''>
              <h2>JLV Mixed Farm</h2>
            </div>
            <div className='Footer__bullets--1'>
              <ul>
                <li>Cattle Rearing</li>
                <li>Goat Rearing</li>
                <li>Hay Making</li>
                <li>Piggery</li>
                <li>Poultry</li>
              </ul>
            </div>
          </div>
          <div className='Footer__bullets'>
            <div className=''>
              <h2>JLV Diary</h2>
            </div>
            <div className='Footer__bullets--1'>
              <ul>
                <li>Milk</li>
                <li>Yogurt</li>
                <li>Cheese</li>
                <li>Butter</li>
                <li>Gee</li>
              </ul>
            </div>
          </div>
          <div className='Footer__bullets'>
            <div className=''>
              <h2>JLV Resort</h2>
            </div>
            <div className='Footer__bullets--1'>
              <ul>
                <li>5 star accomodation</li>
                <li>5 star cottages</li>
                <li>Nature walks</li>
                <li>Swimming</li>
              </ul>
            </div>
          </div>
          <div className='Footer__bullets'>
            <div className=''>
              <h2>Contact Us</h2>
            </div>
            <div className='Footer__bullets--1'>
              <ul className='locationBullets'>
                <li><GoLocation />Rubaga Sub-County - 18km from Biharwe</li>
                <li><AiOutlineMail/> hello@jlventureprises.com</li>
                <li><AiOutlineWhatsApp/> +256 700 899 265</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Footer__part2'>
          <div className='Footer__copyright'>
            @2022 JLV Enterprises.All rights reserved
          </div>
          <div className='Footer__part2--icons'>
                  <div ><AiFillFacebook color="#fff" fontSize="2rem"/></div>
                  <div><AiFillLinkedin color="#fff" fontSize="2rem"/></div>
                  <div><AiFillTwitterCircle color="#fff" fontSize="2rem"/></div>
                  <div><AiFillInstagram color="#fff" fontSize="2rem"/></div>
                  <div><AiFillYoutube color="#fff" fontSize="2rem"/></div>    
                  
            </div>
          <div className='Footer__terms'>Terms and conditions apply</div>
        </div>
      </div>
    </div>
  )
}
