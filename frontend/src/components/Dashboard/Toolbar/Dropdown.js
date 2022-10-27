import React, { useState } from 'react'
import './Dropdown.css'
import { logout } from '../../../features/utils/auth'
function Dropdown() {
    const [showDropdown, setShowDropdown] = useState(false)
    const handleToggleDropdown = ()=>{
        setShowDropdown(!showDropdown)
    }

    return (
        <div className="dropdown">
            <button onClick={handleToggleDropdown} className="dropbtn">v</button>
            {showDropdown && <div id="myDropdown" className="dropdown-content">
                <button className='opt' onClick={logout}>Logout</button>
            </div>}
        </div>
    )
}

export default Dropdown