import React from 'react'
import Navbar from './navbar'
import Search from './search'
import Charts  from './chats'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Navbar />
            <Search />
            <Charts />
        </div>
    )
}

export default Sidebar