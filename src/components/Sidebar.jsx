import React from 'react'
import {motion} from 'framer-motion'
import Routes from './Routes'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'

const Sidebar = ({children}) => {
  return (
    <div className='main-container'>
    <motion.div animate={{width:'200px'}} className='sidebar'>
{/* //logo and bARS section */}
    <div className="top_section">
        <h1 className='logo'>IEEE-SB MMMUT</h1>
        <div className="bars">
            <FaBars/>
        </div>
       
    </div>
{/* search section */}
<div className="search">
    <div className="search_icon">
        <BiSearch/>
    </div>
    <input placeholder='Search...'/>
</div>
{/* search section */}

    <section className="routes">
        {Routes.map((route) => (
            <NavLink to = {route.path} key={route.name} className="link">
                <div className="icon">
                    {route.icon}
                </div>
                <div className="link_text">
                    {route.name}
                </div>
                </NavLink>
        ))}
    </section>
    </motion.div>
    </div>
  )
}

export default Sidebar