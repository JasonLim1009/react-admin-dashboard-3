import React from 'react';
import './sidebar.css';
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/" className="link">
                        <li className='sidebarListItem active'>
                            <LineStyleOutlinedIcon className='sidebarIcon' />
                            Home
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <TimelineOutlinedIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUpOutlinedIcon className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to='/users' className='link'>
                        <li className='sidebarListItem'>
                            <PersonOutlineOutlinedIcon className='sidebarIcon' />
                            Users
                        </li>
                    </Link>
                    <Link to='/products' className='link'>
                        <li className='sidebarListItem'>
                            <StorefrontOutlinedIcon className='sidebarIcon'/>
                            Products
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <AttachMoneyOutlinedIcon className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className='sidebarListItem'>
                        <EqualizerOutlinedIcon className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <EmailOutlinedIcon className='sidebarIcon' />
                        Mail
                    </li>
                    <li className='sidebarListItem'>
                        <DynamicFeedOutlinedIcon className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className='sidebarListItem'>
                        <ChatOutlinedIcon className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <WorkHistoryOutlinedIcon className='sidebarIcon' />
                        Manage
                    </li>
                    <li className='sidebarListItem'>
                        <TimelineOutlinedIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <ReportIcon className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
