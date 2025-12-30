import React from 'react'
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/Dashboard';

const DesktopBar = () => {
  const {showSidebar} = useDashboardContext();

  return (
    <div>
        <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
            <div className='content'>
                <header>
                    <Logo />
                </header>
                <NavLinks isDesktopBar />
            </div>
        </div>
    </div>
  )
}

export default DesktopBar