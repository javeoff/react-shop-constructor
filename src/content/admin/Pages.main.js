import React from 'react'

import UsersList from './pages/users/users.list.js'
import UsersAdd from './pages/users/users.add.js'
import Chat from './pages/users/chat.js'

import SettingsMain from './pages/settings/Settings.main.js'
import SettingsBilling from './pages/settings/Settings.billing.js'

import ComponentsCreate from './pages/components/Components.create.js'
import ComponentsList from './pages/components/Components.list.js'
import ComponentsShop from './pages/components/Components.shop.js'

import GoodsList from './pages/goods/goods.list.js'
import GoodsAdd from './pages/goods/goods.add.js'
import GoodsEdit from './pages/goods/goods.edit.js'

import CategoryList from './pages/goods/category.list.js'
import CategoryAdd from './pages/goods/category.add.js'
import CategoryEdit from './pages/goods/category.edit.js'
import Parser from './pages/goods/parser.js'

import PagesList from './Pages.list'
import Page from './Page'

export default function(props) {
    return(
        <PagesList activePage={props.activePage}>
            <Page id="users-list">
                <UsersList />
            </Page>
            <Page id="users-add">
                <UsersAdd />
            </Page>
            <Page id="online-chat">
                <Chat />
            </Page>
            <Page id="goods-list">
                <GoodsList 
                cookies={props.cookies}
                editItem={props.editItem}
                openModal = {props.openModal}
                setModal={props.setModal}
                />
            </Page>
            <Page id="goods-add">
                <GoodsAdd cookies={props.cookies} />
            </Page>
            <Page id="goods-edit">
                <GoodsEdit
                setActivePage={props.setActivePage}
                cookies={props.cookies} 
                id={props.itemId}
                />
            </Page>
            <Page id="category-list">
                <CategoryList 
                cookies={props.cookies} 
                editCategory={props.editCategory}
                />
            </Page>
            <Page id="category-add">
                <CategoryAdd cookies={props.cookies} />
            </Page>
            <Page id="category-edit">
                <CategoryEdit 
                cookies={props.cookies} 
                setActivePage={props.setActivePage}
                id={props.categoryId}
                />
            </Page>
            <Page id="parser">
                <Parser />
            </Page>
            <Page id="settings-main">
                <SettingsMain />
            </Page>
            <Page id="settings-billing">
                <SettingsBilling />
            </Page>
            <Page id="components-create">
                <ComponentsCreate />
            </Page>
            <Page id="components-list">
                <ComponentsList />
            </Page>
            <Page id="components-shop">
                <ComponentsShop />
            </Page>
        </PagesList>
    )
}