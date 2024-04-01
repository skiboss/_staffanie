import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from './Content'
import "./dashboard.css"
import SubHeader from '../components/SubHeader'

function Dashboard1() {
  return (
    <div className='dashboard-grid-container'>
        <Header />
        <SubHeader />
        <Sidebar />
        <Content />
    </div>
  )
}

export default Dashboard1