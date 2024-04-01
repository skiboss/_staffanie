import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import Logo from '../components/Logo';
import excel from "../assets/excel.svg";
import headshot from "../assets/headshot1.png";
import "./onboarding.css"

function OnBoarding13() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Members
                </h3>
                <p className="">Add the staff members to your organization</p>
                <div className='mb-1'>
                    <span className='plus-region-btn me-3' onClick={() => setModalIsOpen(true)}>+ New Job Role</span>
                    <span className='plus-region-btn' style={{backgroundColor: "#009D48", color: "#C6E3D4"}}><span className='me-1'><img src={excel} width="13px" /></span>Upload Excel</span>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item role-item '>
                        <div className='members-item'>
                            <img src={headshot} width="46px" height="46px" className='ms-3' alt="" />
                            <p>Jane Doe<span className='members-class'>Primary</span><span className='role' style={{display: "block"}}>Marketing</span></p>
                        </div>
                        <span className='manage-btn mt-1'>Manage</span>
                    </div>
                </div>

                <Modal isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={false} 
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)'
                    },
                    content: {
                        color: 'black',
                        top: '20%',
                        left: '30%',
                        right: '25%',
                        bottom: '27%',
                        border: '1px solid #ccc',
                        padding: '30px',
                        background: '#fff',
                    }
                }}>
                    <div className='mod-heading'>
                        <h3 className=''>Add Member</h3> 
                    </div>

                    <form className='mod'>
                        <div className='mt-3' style={{display: 'flex', columnGap: '15px'}}>
                            <input type="text" name="new-member-firstname" id="" placeholder='Firstname' />
                            <input type="text" name="new-member-lastname" id="" placeholder='Lastname' />
                        </div>

                        <div className=''>
                            <input type="text" name="new-member-othername" id="" placeholder='Othername' />
                        </div>

                        <div className=''>
                            <select name="" id="">
                                <option>Job Role</option>
                                <option></option>
                            </select>
                        </div>

                        <div className=''>
                            <Link to='/onboarding8'><button className='btn-proceed' onClick={() => setModalIsOpen(false)}>Proceed</button></Link>
                        </div>
                    </form>

                </Modal>

                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding12"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding13"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}


export default OnBoarding13