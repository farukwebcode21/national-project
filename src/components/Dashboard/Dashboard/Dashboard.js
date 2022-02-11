import React from 'react';
import './dashboard.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <div  className='iconDashboard'>
             <span> <DashboardIcon/></span>
              <span className='logo'>Dashboard</span>
          </div>
          
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
          <span className='username'>Mr. Robin<br/>Admin</span>
          <span className='userimage'> <AccountCircleIcon/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
