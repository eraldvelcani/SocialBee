import React from 'react'
import { useState } from 'react';
import { FaUser, FaCaretDown } from "react-icons/fa6";
import { useDashboardContext } from '../pages/Dashboard';

const ProfileDropdown = () => {
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const {user, logoutUser} = useDashboardContext();
  return (
    <div>
        <button type='button' onClick={() => setShowLogoutBtn(!showLogoutBtn)} className='btn logout-btn'>
            <FaUser />
            {user?.name} {/*optional chaining -> if user is present */}
            <FaCaretDown />
        </button>
        <div className={showLogoutBtn ? 'dropdown show-dropdown' : 'dropdown'}>

        </div>
    </div>
  )
}

export default ProfileDropdown;