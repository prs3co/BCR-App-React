import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { MdDehaze, MdExpandMore, MdSearch } from 'react-icons/md'

function Dashboard() {
  const { logout } = useAuth()
  return (
    <div className='flex-grow-1'>
      <header className='header__dashboard' style={{padding: '18px', background: 'white'}}>
        <nav className='d-flex justify-content-between'>
          <div className='d-flex'>
            <button style={{display: 'contents'}}>
              <MdDehaze size={34} />
            </button>
          </div>
          <div className='d-flex gap-4'>
            <div className='d-flex position-relative align-items-center' style={{color: '#d0d0d0'}}>
              <MdSearch size={20} className='position-absolute ms-3 pe-none' />
              <input type="text" placeholder='Search' className='pe-3 ps-5 h-100' style={{width: '174px', border: '1px solid #d0d0d0'}} />
              <button className='h-100 text--primary' style={{backgroundColor: 'white', border: '1px solid #0D28A6'}}>Search</button>
            </div>
            <div className='d-flex' style={{gap: '8px'}}>
              <div style={{width: '36px'}} className='bg--grey rounded-circle d-flex align-items-center justify-content-center'>
                <span>B</span>
              </div>
              <span style={{textAlign: 'center', alignSelf: 'center'}}>Brandon</span>
              <button style={{border: 'none', backgroundColor: 'white'}}>
                <MdExpandMore size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <h1>Ini Dashboard</h1>
      <button type='button'onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
