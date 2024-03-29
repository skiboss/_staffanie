import React from 'react'
import { BsCalendar3, BsWindowSidebar, BsPeople, BsAward, BsGraphUpArrow} from 'react-icons/bs'
import Logo from './Logo'
import _dash from '../assets/dashboard.svg';
import _payroll from "../assets/payroll.svg"
import _calendar from "../assets/calendar.svg"
import _staffing from "../assets/staffing.svg"
import _training from "../assets/training.svg"
import _performance from "../assets/performance.svg"
import _attendance from '../assets/attendance.svg';
import _proc from "../assets/proc.svg"
import _down from "../assets/down.svg"


function Sidebar() {
  return (
    <aside id='sidebar'>
        <div className="sidebar-title">
            <div className="">
                <span className='icon-header dashboard-logo'>
                    <Logo />
                </span>
            </div>
            <span className='icon close-icon'>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href='/signin' className='flex justify-content-between'>
                <span><i className='icon-header'><img src={_dash} className='icon-header' alt="" srcset="" /></i> Dashboard</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='flex justify-content-between'>
                    {/* <i><BsCalendar3 className='icon-header' /></i> Calendar */}
                    <span><i className='icon-header'><img src={_calendar} className='icon-header' alt="" srcset="" /></i> Calendar</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='flex justify-content-between'>
                {/* <i><BsPeople className='icon-header' /></i>Staffing */}
                <span><i className='icon-header'><img src={_staffing} className='icon-header' alt="" srcset="" /></i> Staffing</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='flex justify-content-between'>
                {/* <i><BsAward className='icon-header' /></i> Training */}
                <span><i className='icon-header'><img src={_training} className='icon-header' alt="" srcset="" /></i> Training</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='flex justify-content-between'>
                <span><i className='icon-header'><img src={_payroll} className='icon-header' alt="" srcset="" /></i>Payroll</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='flex justify-content-between'>
                <span><i className='icon-header'><img src={_performance} className='icon-header' alt="" srcset="" /></i>Performance</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='flex justify-content-between'>
                <span><i className='icon-header'><img src={_attendance} className='icon-header' alt="" srcset="" /></i>Attendance</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='flex justify-content-between'>
                <span><i className='icon-header'><img src={_proc} className='icon-header' alt="" srcset="" /></i>Procurement</span> <span><i className='icon-header'><img src={_down} className='icon-header' alt="" srcset="" /></i></span>
                </a>
            </li>
        </ul>
    </aside>
    )
}

export default Sidebar