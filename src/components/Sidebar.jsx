import React from 'react'
import SidebarOption from './SidebarOption'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/sidebar.css'

const Sidebar = () => {
    const sidebar_options = [
        {
            name: "avatar",
            title: "Avatar",
            src: "https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg",
        },
        {
            name: "friends",
            title: "Friends",
            src: "https://cdn-icons-png.flaticon.com/512/9453/9453959.png",
        },
        {
            name: "groups",
            title: "Groups",
            src: "https://e7.pngegg.com/pngimages/603/650/png-clipart-computer-icons-facebook-private-miscellaneous-blue-thumbnail.png",
        },
        {
            name: "watch",
            title: "Watch",
            src: "https://cdn-icons-png.flaticon.com/512/4406/4406124.png",
        },
        {
            name: "seemore",
            title: "See more",
            icon: ExpandMoreIcon,
        },
    ];
  return (
    <div className='sidebar'>
        {
            sidebar_options.map((item) => (
                <SidebarOption key={item.name} src={item.src} title={item.title} Icon={item.icon} />
            ))
        }
        
        
    </div>
  )
}

export default Sidebar