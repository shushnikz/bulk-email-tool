import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { Avatar } from '@material-ui/core';
import "./css/Header.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {

    const user = useSelector(selectUser)
    // const handleLogout = () => {
    //     if(window.confirm('Are you sure to logout?')){
    //         auth.signOut()
    //     }
        
    // }

  return (
    <div className='header'>
        <div className='headerLeft'>
            <MenuIcon />
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png'
             alt='loading' />
        </div>
        <div className='headerMiddle'>
            <div className='header_SearchContainer'>
               <SearchIcon />
               <input 
               type="text"
               placeholder="Search Mail"
               />
               <ArrowDropDownIcon />
            </div>
        </div>
        <div className='headerRight'>
            <div className='headerRightIcons'>
                <HelpOutlinedIcon />
                <SettingsOutlinedIcon />
                <DialpadOutlinedIcon />
            </div>
            <div className='headerAvatar' style={{
                cursor: "pointer",
                
            }} >
               <Avatar 
               onClick = {()=>auth().signOut()}
               src = {user.photo}
               />
            </div>
        </div>
    </div>
  )
}

export default Header