import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Food delivery describes the service of transporting prepared meals or groceries from a restaurant, store, or other vendor to a customer's location, typically their home or office. This service is facilitated by online platforms like apps or websites, or through </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+674567880O</li>
                <li>HGHJGHGH@tomato.COM</li>
            </ul>
        </div>
      </div>

<hr/>
<p className="footer-copyright">copyright 2025 @Tomato.com</p>

    </div>
  )
}

export default Footer
