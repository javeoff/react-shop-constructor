import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faListAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'

export default function(props) {
    return (
        <div>
            <span className="sidebar-name">Пользователи</span>
            <span
            data-to="users-add"
            onClick={props.changePage}
            className={`sidebar-art add-button ${"users-add" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                Добавить пользователя
            </span>
            <span
            data-to="users-list"
            onClick={props.changePage}
            className={`sidebar-art ${"users-list" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faListAlt} className="icon" />
                Список пользователя
            </span>
            <span
            data-to="online-chat"
            onClick={props.changePage}
            className={`sidebar-art ${"online-chat" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faSitemap} className="icon" />
                Чат Поддержка
            </span>
        </div>
    )
}