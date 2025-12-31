import React from 'react'
import { useState } from 'react';
import { FaUser, FaCaretDown } from "react-icons/fa6";
import { useDashboardContext } from '../pages/Dashboard';
import Wrapper from '../assets/wrappers/ProfileDropdown';

const ProfileDropdown = () => {
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const {user, logOutUser} = useDashboardContext();
  return (
    <Wrapper>
        <button type='button' onClick={() => setShowLogoutBtn(!showLogoutBtn)} className='btn logout-btn'>
            <FaUser />
            {user?.name} {/*optional chaining -> if user is present */}
            <FaCaretDown />
        </button>
        <div className={showLogoutBtn ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' onClick={logOutUser} className='dropdown-btn'>
                Sign Out
            </button>
        </div>
    </Wrapper>
  )
}

export default ProfileDropdown;