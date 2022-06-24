import React, { useState } from 'react'
import './Dropdown.css'
import { logout } from '../../../features/utils/auth'
function Dropdown() {
    const [showDropdown, setShowDropdown] = useState(false)
    const handleToggleDropdown = ()=>{
        setShowDropdown(!showDropdown)
    }

    return (
        <div class="dropdown">
            <button onClick={handleToggleDropdown} class="dropbtn">v</button>
            {showDropdown && <div id="myDropdown" class="dropdown-content">
                <button className='opt' onClick={logout}>Logout</button>
            </div>}
        </div>
    )
}

export default Dropdown