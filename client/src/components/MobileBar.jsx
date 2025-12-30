import React from 'react'
import { useDashboardContext } from '../pages/Dashboard'
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/MobileBar';

const MobileBar = () => {
    const {showSidebar, toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
        <div className={showSidebar ? 'sidebar-contaienr show-sidebar' : 'sidebar-container'}>
            <div className='content'>
                <button type='button' className='close-btn' onClick={toggleSidebar} >
                    <FaTimes />
                </button>
                <header>
                    <Logo />
                </header>
                <div className="nav-links">
                    {links.map((link) => {
                        const {text, path /*, icon */} = link;
                        return <NavLink to={path} key={text} className='nav-link'>
                                   <span className='icon'>
                                        {/*{icon}*/}
                                    </span> 
                                    {text}
                               </NavLink>
                    })}
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default MobileBar