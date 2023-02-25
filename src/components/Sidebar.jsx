import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import Routes from './Routes'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'

const Sidebar = ({children}) => {

    const[isOpen , setIsOpen] = useState(false);

    const toggle = ()=> setIsOpen(!isOpen); 

    const inputAnimation = {
        hidden: {
            width:0,
            padding:0,
            opacity: 0,
            transition:{
                duration: 0.2,
            }
        },
        show:{
            width: "160px",
            padding: "5px 15px",
            opacity:1,
            transition:{
                duration: 0.2,
            }
        }

    }

    const showAnimation = {
        hidden: {
            width:0,
            opacity: 0,
            transition:{
                duration: 0.5,
            }
        },
        show:{
            width: "auto",
            opacity:1,
            transition:{
                duration: 0.2,
            }
        }

    }

  return (
    <div className='main-container'>
    <motion.div animate={{width:isOpen ? '200px' :'36px' ,
transition:{
    duration: 0.2,
    type:"spring",
    damping:11
}
}} className='sidebar'>
{/* //logo and bARS section */}
    <div className="top_section">
        {isOpen && <motion.h1 initial="hidden" animate="show" exit="hidden" variants={showAnimation}
        className='logo'>IEEE-SB MMMUT</motion.h1>}
        <div className="bars">
            <FaBars onClick={toggle}/>
        </div>
       
    </div>
{/* search section */}
<div className="search">
    <div className="search_icon">
        <BiSearch/>
    </div>
    <AnimatePresence>
        {isOpen &&( <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder='Search...'/>)}
    </AnimatePresence>
   
</div>
{/* search section */}

    <section className="routes">
        {Routes.map((route) => (
            <NavLink activeClassName="active" to = {route.path} key={route.name} className="link">
                <div className="icon">
                    {route.icon}
                </div>
                <AnimatePresence>
               {isOpen && (<motion.div initial="hidden" animate="show" exit="hidden" variants={showAnimation} className="link_text">
                    {route.name}
                </motion.div>)}
                </AnimatePresence>
                </NavLink>
        ))}
    </section>
    </motion.div>
    </div>
  )
}

export default Sidebar