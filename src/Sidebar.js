import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

const Header = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

function Sidebar() {
    return (
        <div className ="sidebar">
            < MenuIcon />
            <SidebarRow selected Icon= {HomeIcon} title="Home"/>
            <SidebarRow selected  Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow selected Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr />
            <SidebarRow Icon={MonetizationOnIcon} title="For Sale" />
            <SidebarRow Icon={ApartmentIcon} title="For Rent" />
            <SidebarRow Icon={ThumbsUpDownIcon} title="Advice" />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />
        </div>
    );
}
}
export default Sidebar;
