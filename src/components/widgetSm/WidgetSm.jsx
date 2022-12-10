import React from 'react';
import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function widgetSm() {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img src='https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s88-c-k-c0x00ffffff-no-rj-mo' alt='' className='widgetSmImg' />
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Jason</span>
                    <span className='widgetSmUserTitle'>Developer</span>
                </div>
                <button className='widgetSmButton'>
                <VisibilityIcon />
                Display
                </button>
            </li>
            <li className='widgetSmListItem'>
                <img src='https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s88-c-k-c0x00ffffff-no-rj-mo' alt='' className='widgetSmImg' />
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Jason</span>
                    <span className='widgetSmUserTitle'>Developer</span>
                </div>
                <button className='widgetSmButton'>
                <VisibilityIcon />
                Display
                </button>
            </li>
            <li className='widgetSmListItem'>
                <img src='https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s88-c-k-c0x00ffffff-no-rj-mo' alt='' className='widgetSmImg' />
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Jason</span>
                    <span className='widgetSmUserTitle'>Developer</span>
                </div>
                <button className='widgetSmButton'>
                <VisibilityIcon />
                Display
                </button>
            </li>
            <li className='widgetSmListItem'>
                <img src='https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s88-c-k-c0x00ffffff-no-rj-mo' alt='' className='widgetSmImg' />
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Jason</span>
                    <span className='widgetSmUserTitle'>Developer</span>
                </div>
                <button className='widgetSmButton'>
                <VisibilityIcon className='widgetSmIcon' />
                Display
                </button>
            </li>
        </ul>
    </div>
  )
}
