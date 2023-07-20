


import "../container/sidebar.scss"
import Logo  from "../assets/images/icons/logo.svg"
import SidebarBtn from "../components/SidebarBtn";
import {Chart ,Ticket,Ideas,Contacts,Agents,Articles,Settings,Subscription} from "../assets/Icons"
import { Link } from "react-router-dom";





const Sidebar = () => {
    return(
    <div className="sidebar">
        <div className="sidebar-header">
        <Link to = "/overview"><img src={Logo} alt="Dashbord Logo" /></Link>
           <h1>Dashboard Kit</h1> 
         </div>
         <Link to = "/overview"><SidebarBtn img={<Chart/>} title="Overview"/></Link>
         <Link to ="/tickets"><SidebarBtn  img={<Ticket/>} title="Tickets"/></Link>
         <SidebarBtn img={<Ideas/>} title="Ideas"/>
         <SidebarBtn img={<Contacts/>} title="Contacts"/>
         <SidebarBtn img={<Agents/>} title="Agents"/>
         <SidebarBtn img={<Articles/>} title="Articles"/>
         <SidebarBtn img={<Settings/>} title="Settings"/>
         <SidebarBtn img={<Subscription/>} title="Subscription"/>
    </div>
     );
};

export default Sidebar;