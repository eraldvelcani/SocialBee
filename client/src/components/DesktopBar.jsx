import React from 'react'
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/Dashboard';
import Wrapper from '../assets/wrappers/DesktopBar';

const DesktopBar = () => {
  const {showSidebar} = useDashboardContext();

  return (
    <Wrapper>
        <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
            <div className='content'>
                <header>
                    <Logo />
                </header>
                <NavLinks isDesktopBar />
            </div>
        </div>
    </Wrapper>
  )
}

export default DesktopBar