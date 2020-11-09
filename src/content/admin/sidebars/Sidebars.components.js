import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faListAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'

export default function(props) {
    return (
        <div>
            <span className="sidebar-name">Компоненты</span>
            <span 
            data-to="components-create"
            onClick={props.changePage}
            className={`sidebar-art add-button ${"components-create" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                Создать компонент
            </span>
            <span 
            data-to="components-list"
            onClick={props.changePage}
            className={`sidebar-art ${"components-list" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faListAlt} className="icon" />
                Список компонентов
            </span>
            <span 
            data-to="components-shop"
            onClick={props.changePage}
            className={`sidebar-art ${"components-shop" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faSitemap} className="icon" />
                Магазин компонентов
            </span>
        </div>
    )
}