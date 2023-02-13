import {FaHome} from'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {MdEmojiEvents} from 'react-icons/md'
import {HiMail} from 'react-icons/hi'
import {RiTeamFill} from 'react-icons/ri'
import {DiAtom} from 'react-icons/di'

const Routes = [
    {
        path:'/',
        name:'Home',
        icon: <FaHome/>
    },
    {
        path:'/events',
        name:'Our Events',
        icon: <MdEmojiEvents/>
    },
    {
        path:'/ourteam',
        name:'Meet our Team',
        icon: <RiTeamFill/>
    },
    {
        path:'/ourdevelopers',
        name:'Our Developers',
        icon: <DiAtom/>
    },
    {
        path:'/about',
        name:'About Us',
        icon: <SiAboutdotme/>
    },
    {
        path:'/contactus',
        name:'Contact Us',
        icon: <HiMail/>
    },
]

export default Routes