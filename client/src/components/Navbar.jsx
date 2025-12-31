import React from 'react'
import { RiHomeHeartFill } from "react-icons/ri"; 
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from '.';
import { useDashboardContext } from '../pages/Dashboard';
import Wrapper from '../assets/wrappers/Navbar';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
        <div className="nav-center">
            <button type='button' className='toggle-btn' onClick={ toggleSidebar }>
                <RxHamburgerMenu />
            </button>
            <div>
                <Logo />
                <h4 className='logo-text'>Dashboard</h4>
            </div>
            <div className="btn-container">
                <ProfileDropdown />
            </div>
        </div>
    </Wrapper>
  )
}

export default Navbar;