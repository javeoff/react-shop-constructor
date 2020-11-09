import React, {useState} from 'react'
import classNames from 'classnames'
import { Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faListAlt, faShoppingCart, faUsers, faCog, faSitemap, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

import GoodsSidebar from './sidebars/Sidebars.goods'
import UsersSidebar from './sidebars/Sidebars.users'
import UsersSettings from './sidebars/Sidebars.settings'
import UsersComponents from './sidebars/Sidebars.components'

import SidebarList from './Sidebar.list'
import Sidebar from './Sidebar'

import './Admin.css'

export default function({activePage, setActivePage}) {
    const [activeSidebar, setActiveSidebar] = useState('goods')

    const mainPage = {
        "goods": "goods-list",
        "users": "users-list",
        "settings": "settings-main",
        "components": "components-list"
    }

    const changeSide = (e) => {
        const target = e.currentTarget.dataset.to
        setActiveSidebar(target)
        setActivePage(mainPage[target])
    }

    const changePage = (e) => {
        const target = e.currentTarget.dataset.to
        setActivePage(target)
    }
    
    return (
        <div className="sidebar-cover">
            <div className="sidebar">
                <span className={`sidebar-icon icon1 ${"goods" === activeSidebar ? "sidebar-active" : ""}`} onClick={changeSide} data-to="goods">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className={`sidebar-icon icon2 ${"users" === activeSidebar ? "sidebar-active" : ""}`} onClick={changeSide} data-to="users">
                    <FontAwesomeIcon icon={faUsers} />
                </span>
                <span className={`sidebar-icon icon3 ${"settings" === activeSidebar ? "sidebar-active" : ""}`} onClick={changeSide} data-to="settings">
                    <FontAwesomeIcon icon={faCog} />
                </span>
                <span className={`sidebar-icon icon4 ${"components" === activeSidebar ? "sidebar-active" : ""}`} onClick={changeSide} data-to="components">
                    <FontAwesomeIcon icon={faLayerGroup} />
                </span>
                <span className="sidebar-icon"></span>
            </div>
            <div className="sidebar-sec">
                <SidebarList activeSidebar={activeSidebar}>
                    <Sidebar id="goods">
                        <GoodsSidebar activePage={activePage} changePage={changePage} />
                    </Sidebar>
                    <Sidebar id="users">
                        <UsersSidebar activePage={activePage} changePage={changePage} />
                    </Sidebar>
                    <Sidebar id="settings">
                        <UsersSettings activePage={activePage} changePage={changePage} />
                    </Sidebar>
                    <Sidebar id="components">
                        <UsersComponents activePage={activePage} changePage={changePage} />
                    </Sidebar>
                </SidebarList>
            </div>
        </div>
    )
}