import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faListAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'

export default function(props) {
    return (
        <div>
            <span className="sidebar-name">Настройки</span>
            <span
            data-to="settings-main"
            onClick={props.changePage}
            className={`sidebar-art ${"settings-main" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faListAlt} className="icon" />
                Настройка сайта
            </span>
            <span
            data-to="settings-billing"
            onClick={props.changePage}
            className={`sidebar-art ${"settings-billing" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faSitemap} className="icon" />
                Платежная система
            </span>
        </div>
    )
}