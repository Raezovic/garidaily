import React from 'react';
import Facebook from '../Images/Icons/facebook.png';
import Twitter from '../Images/Icons/twitter-sign.png';
import Instagram from '../Images/Icons/instagram.png';
import Moti from '../Images/garidaily.png';
import '../styles/Footer.css';


export function Footer() {
  return (
    <div>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@100..900&family=Rubik+Wet+Paint&display=swap" rel="stylesheet"></link>
            
      <footer style={{ backgroundColor: '#25a5be', color: '#023020',borderBlockStyle: 'inset' , padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <div className="footer-section" style={{ flex: 1, marginBottom: '20px' }}>
        <h3 class="footerh3">Subscribe to Our Newsletter</h3>
        <div className="footer-form" style={{ display: 'flex' }}>
          <input class="footerinput" type="email" placeholder="Your Email Address" style={{ padding: '8px', marginRight: '10px',borderBlockStyle: 'hidden' }} />
          <button class="footerbutton" type="submit">Subscribe</button>
        </div>
      </div>
      <div className="footer-section" style={{ flex: 1, marginBottom: '20px' }}>
        <h3 class="footerh3">Quick Links</h3>
        <ul className="quick-links" style={{ display:'block',backgroundColor: '#25a5be', listStyle: 'none',alignContent: 'center', padding: '0', margin: '0' }}>
          <li class='footerli'><a href="#">Home</a></li>
          <li class='footerli'><a href="#booking-section">Book Now</a></li>
          <li class='footerli'><a href="#">AboutUs</a></li>
          <li class='footerli'><a href="#">Contact</a></li>
        </ul>

      </div>
      <div className="footer-section" style={{ flex: 1, marginBottom: '20px'}}>
        <h3 class="footerh3">Follow Us</h3>
        <div className="social-media" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Facebook} alt="Facebook" class="footerfacebook" style={{ width: '50px', marginRight: '10px' }} />
          <img src={Instagram} alt="Twitter" class="footertwitter" style={{ width: '50px', marginRight: '10px' }} />
          <img src={Twitter} alt="Instagram" class="footerinstagram" style={{ width: '50px' }} />
        </div>
      </div>

      <div className="footer-section" style={{ flex: 1, }}>
        <h3 class="footerh3">GariDaily</h3>
        <div className="social-media" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Moti} alt="Moti" class="footerinstagram" style={{ width: '90px' }} />
          
        <p class='footerli'>"Its about the smiles per Gallon"</p>  
        </div>
      </div>
      
    
    </footer>
      
      
      
    </div>
  );
}

export default Footer;