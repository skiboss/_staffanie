import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo';
import _newregion from '../assets/new-region.png';
import Modal from 'react-modal'
import "./onboarding.css"
import './modal.css'


Modal.setAppElement("#root");
function OnBoarding5() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="onboarding1-container">
        <div className="section-left"></div>
        <div className="section-right">
            <div className='flex flex-column'>

                <div className="onboarding-logo"><Logo /></div>
                <h3>
                    Countries of Operation
                </h3>

                <p className="">What countries are you operational?</p>
                
                <div className='add-region-bg'>
                    <img src={_newregion} style={{width: "100%"}} alt="Add a new region background" />
                    <span onClick={() => setmodalIsOpen(true)} className='add-region-btn'>Add a new region</span>
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
                        bottom: '27%',
                        border: '1px solid #ccc',
                        padding: '30px',
                        background: '#fff',
                    }
                }}>
                    <div className='mod-heading'>
                        <h3 className=''>Add a region</h3> 
                    </div>

                    <form className='mod'>
                        <div className='mt-3'>
                            <input type="text" name="region-name" id="" placeholder='Region Name' />
                        </div>

                        <div style={{display: 'flex', columnGap: '15px'}} className=''>
                            <select name="" id="" style={{width: '50%'}}>
                                <option>Select Continent</option>
                                <option></option>
                            </select>
                            <select name="" id="" style={{width: '50%'}}>
                                <option>Select Country</option>
                                <option></option>
                            </select>
                        </div>

                        <div style={{display: 'flex', columnGap: '15px'}} className=''>
                            <select name="" id="" style={{width: '50%'}}>
                                <option>Select State</option>
                                <option></option>
                            </select>
                            <select name="" id="" style={{width: '50%'}}>
                                <option>Select City</option>
                                <option></option>
                            </select>
                        </div>
                        <div className=''>
                            <Link to='/onboarding6'><button className='btn-proceed' onClick={() => setmodalIsOpen(false)}>Proceed</button></Link>
                        </div>
                    </form>

                </Modal>
                <div class="onboarding1-button mt-5 options-buttons">
                    <Link to="/onboarding4"><button id='back-button'> Back </button></Link>
                    <Link to="/onboarding6"><button className='proceed' type="submit">Proceed</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnBoarding5