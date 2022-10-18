import React from 'react';
import "./css/Mail.css";
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import { Checkbox } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import MailCards from './MailCards';

function Mail() {
    return (
        <div className='mail'>
            <div className='mail_containerTop'>
                <div className='mailTop'>
                    <Checkbox className='checkbox' />
                    <ArrowDropDown />
                    <RefreshIcon />
                    <MoreVertIcon />
                </div>
                <div className='mailTopRight'>
                    <ChevronLeftIcon />
                    <ChevronRightIcon />
                    <KeyboardIcon />
                    <ArrowDropDown />
                </div>
            </div>
            <div className='mail_containerMid'>
                <div className='mail_containerMidOptions'>
                    <div className='mail_containerMidOption'>
                        <InboxIcon />
                        <h3>Primary</h3>
                    </div>
                    <div className='mail_containerMidOption'>
                        <PeopleAltIcon />
                        <h3>Social</h3>
                    </div>
                    <div className='mail_containerMidOption'>
                        <LocalOfferIcon />
                        <h3>Promotions</h3>
                    </div>
                    <div className='mail_containerMidOption'>
                        <InfoIcon />
                        <h3>Updates</h3>
                    </div>
                    <div className='mail_containerMidOption'>
                        <ForumIcon />
                        <h3>Forums</h3>
                    </div>
                </div>
            </div>
            <div className='mail_ContainerMain'>
                <div className='mail_ContainerMainCards'>
                    <MailCards />
                </div>
            </div>
        </div>
    )
}

export default Mail