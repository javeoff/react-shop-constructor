import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faListAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'

export default function(props) {
    return (
        <div>
            <span className="sidebar-name">Товары</span>
            <span 
            data-to="goods-add"
            onClick={props.changePage}
            className={`sidebar-art add-button ${"goods-add" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                Добавить товар
            </span>
            <span 
            data-to="goods-list"
            onClick={props.changePage}
            className={`sidebar-art ${"goods-list" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faListAlt} className="icon" />
                Список товаров
            </span>
            <span
            data-to="category-list"
            onClick={props.changePage}
            className={`sidebar-art ${"category-list" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faSitemap} className="icon" />
                Список категорий
            </span>
            <span
            data-to="category-add"
            onClick={props.changePage}
            className={`sidebar-art ${"category-add" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                Добавить категорию
            </span>
            <span
            data-to="parser"
            onClick={props.changePage}
            className={`sidebar-art ${"parser" === props.activePage ? "sidebar-art-active" : ""}`}
            >
                Парсер товаров
            </span>
        </div>
    )
}