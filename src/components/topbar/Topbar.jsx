import React from 'react';
import './topbar.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'><a href='/'>test</a></span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNoneOutlinedIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <SettingsSuggestIcon />
                </div>
                <img 
                    src='https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s88-c-k-c0x00ffffff-no-rj-mo' 
                    alt='' 
                    className='topAvatar' 
                    />
            </div>
        </div>
    </div>
  )
}
