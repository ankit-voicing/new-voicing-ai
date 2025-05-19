import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='min-h-screen'>
            <Header />
            <div className="flex bg-slate-50 text-gray-800">
                <Sidebar />
                <div className='ml-20 w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout