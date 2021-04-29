import React, { useState }  from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
//es7 snipets  
function Header() {
    // es5 snippets (Go download as an extension on VSC)
    const [inputSearch, setInputSearch ] = useState ("");
    return (
        <div className="header">
        <div className="header__left">
                < MenuIcon />
                <Link to ="/">
                    <img
                        className="header__logo"
                        src="/images/sp-logo.png"
                        alt="https://drive.google.com/drive/u/0/folders/1s4TYai-VLrlHE2xSebx0kT_ctC8P59EU"
                    />
                </Link>
               
        </div>
            <div className="header__input">

                <input
                 onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch} 
                placeholder="Search" 
                type="text" />
               <Link to = {'/search/&{inputSearch}'}>
                    <SearchIcon className="header__inputButton" />
               </Link>

            </div>
            <div className="header__icons">
                <VideoCallIcon className= "header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon />
                <Avatar
                    alt="Remy Sharp"
                    src="/images/pr<SearchIcon/>of.jpg"
                />
            </div>
           
            
            
        </div>
    );
}

export default Header; 

