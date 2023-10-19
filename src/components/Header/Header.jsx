import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpned, setMenuuOpned] = useState(false)
  return (
    <div className='header'>
        <img src={Logo} alt='Logo' className='logo'/>

        {menuOpned===false && mobile===true ? 
          (<div 
          style={{
            backgroundColor:"var(--appColor)", 
            padding : "0.5rem", 
            borderRadius : "5px"
          }} 
          onClick={()=> setMenuuOpned(true)}>
            <img src={Bars} alt="" style={{width:'1.5rem', height:'1,5rem'}}/>
          </div>)
        :(
          <ul className='menu'>
            
              <li>
                <Link
                  onClick={()=>setMenuuOpned(false)}
                  activeClass='active'
                  to='home'
                  spy={true}
                  // scroll={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={()=>setMenuuOpned(false)}
                  to='programs'
                  spy={true}
                  // scroll={true}
                  smooth={true}
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  onClick={()=>setMenuuOpned(false)}
                  to='reasons'
                  spy={true}
                  // scroll={true}
                  smooth={true}
                >
                  Why Us
                </Link>
              </li>

              <li>
                <Link
                  onClick={()=>setMenuuOpned(false)}
                  to='plans'
                  spy={true}
                  // scroll={true}
                  smooth={true}
                >
                  Plans
                </Link>
              </li>


              <li>
                <Link
                  onClick={()=>setMenuuOpned(false)}
                  to='testimonials'
                  spy={true}
                  // scroll={true}
                  smooth={true}
                >
                  Testimonials
                </Link>
              </li>

        </ul>
        )}

        
    </div>
  )
}

export default Header