import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import Logo from '../components/Logo';
import "./onboarding.css"

function OnBoarding11() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>
                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Departments & Teams
                </h3>
                <p className="">Add departments to your organization</p>
                <div className='mb-1'>
                    <span className='plus-region-btn' onClick={() => setModalIsOpen(true)}>+ New Department</span>
                </div>
                <hr className='' />
                <div>
                    <div className='region-item'>
                        <p>Marketing</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>Development & Technology</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                    <div className='region-item'>
                        <p>Finance</p>
                        <span className='manage-btn'>Manage</span>
                    </div>
                </div>
                <Modal isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={false} 
                onRequestClose={() => setmodalIsOpen(false)}
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
                        bottom: '47%',
                        border: '1px solid #ccc',
                        padding: '30px',
                        background: '#fff',
                    }
                }}>
                    <div className='mod-heading'>
                        <h3 className=''>Add Department</h3> 
                    </div>

                    <form className='mod'>
                        <div className='mt-3'>
                            <input type="text" name="department-name" id="" placeholder='Department Name' />
                        </div>

                        <div className=''>
                            <Link to='/onboarding11'><button className='btn-proceed' onClick={() => setModalIsOpen(false)}>Proceed</button></Link>
                        </div>
                    </form>

                </Modal>
                <div className="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding10"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding12"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding11