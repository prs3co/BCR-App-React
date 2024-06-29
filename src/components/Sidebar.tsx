import React from 'react'
import { MdCarRental, MdDirectionsCarFilled, MdHouse } from "react-icons/md";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className='sidebar__dashboard d-flex flex-column z-1'>
        <header style={{ padding: '18px' }}>
          <div className='sidebar__logo bg--whiteblue rounded-1'>
            <MdCarRental size={34} className='text--whiteblue' />
          </div>
        </header>
        <nav className='d-flex flex-grow-1 flex-column'>
          <Link to={'/dashboard'} className='sidebar-btn d-flex justify-content-center flex-column' style={{ padding: '10px 5px', textDecoration: 'none' }}>
            <MdHouse size={24} color='white' style={{ alignSelf: 'center' }} />
            <div className='text-center'>
              <span className='text-white' style={{ fontSize: '12px' }}>Dashboard</span>
            </div>
          </Link>
          <Link to={'cars'} className='sidebar-btn d-flex justify-content-center flex-column' style={{ padding: '10px 5px', textDecoration: 'none' }}>
            <MdDirectionsCarFilled size={24} color='white' style={{ alignSelf: 'center' }} />
            <div className='text-center'>
              <span className='text-white' style={{ fontSize: '12px' }}>Cars</span>
            </div>
          </Link>
        </nav>
      </div>
      <div className='sidebar__dashboard d-flex flex-column z-1' style={{width: '220px', backgroundColor: 'white'}}>
        <header style={{ padding: '18px' }} className='header__dashboard' >
          <div className='sidebar__logo bg--grey rounded-1' style={{width: '100px'}}>
            <MdCarRental size={34} className='text--grey'/>
          </div>
        </header>
        <nav className='d-flex flex-grow-1 flex-column' style={{padding: '24px 0px'}}>
          <div className='sidebar-btn d-flex justify-content-center flex-column' style={{ padding: '11px 24px'}}>
            <div className='text-start d-flex'>
              <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: '20px'}} className='text--grey'>DASHBOARD</span>
            </div>
          </div>
          <Link to={'cars'} className='sidebar-btn d-flex justify-content-center flex-column text--neutral bg--whiteblue' style={{ padding: '11px 24px', textDecoration: 'none' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: '20px' }}>Dashboard</span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
