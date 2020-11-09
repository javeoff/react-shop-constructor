import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import User from '../../api/users'

import { Button, Spinner, Modal } from 'react-bootstrap';
import Sidebar from './Sidebar.admin'
import Pages from './Pages.main'

export default function(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['hash']);
    const [hash, setHash] = useState(null)
    const [loading, setLoad] = useState(<Spinner animation="grow" variant="primary" className="loader" />)
    const [activePage, setActivePage] = useState('goods-list')
    const [itemId, setItemId] = useState('0')
    const [categoryId, setCategoryId] = useState('0')
    const [modal, setModal] = useState(false)
    const [modalText, setModalText] = useState(null)
    const [modalAction, setModalAction] = useState(null)

    useEffect(() => {
        async function validUser() {
            setHash(await findUser())
            setLoad(null)
        }
        validUser()
    }, [])

    async function findUser() {
        const response = await (await new User().getUser(cookies.hash)).json()
        return response.logged
    }

    function logoutUser() {
        //if (cookies.hash) {
            removeCookie('hash')
            props.history.push('/login')
        //}
    }

    function loginUser() {
        //if (!cookies.hash) {
            props.history.push('/login')
        //}
    }

    function editItem(id) {
        setItemId(id)
        setActivePage('goods-edit')
    }

    function editCategory(id) {
        setCategoryId(id)
        setActivePage('category-edit')
    }

    function openModal(text, fn, args) {
        setModal(true)
        setModalText(text)
        setModalAction([fn, args])
        //fn(...args)
    }

    const mock = (
        <div className="admin-cover">
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            {/* <div className="admin-content">
                <h1>Административная панель</h1>
                <Button onClick={logoutUser}>Выйти</Button>
            </div> */}
            { modal &&
            <Modal.Dialog className="modal-view">
                <Modal.Header closeButton>
                    <Modal.Title>Подтверждение действия</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>{modalText}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModal(false)}>Закрыть</Button>
                    <Button variant="primary" onClick={() => modalAction[0](...modalAction[1])}>Подтвердить</Button>
                </Modal.Footer>
            </Modal.Dialog>
            }
            <div className="admin-content" >
                <Pages 
                activePage={activePage} 
                setActivePage={setActivePage} 
                cookies={cookies} 
                itemId={itemId} 
                editItem={editItem}
                categoryId={categoryId} 
                editCategory={editCategory}
                openModal={openModal}
                setModal={setModal}
                />
            </div>
        </div>
    )

    return (
        <div>
            { loading ? loading : hash ? mock : props.history.push('/login') }
        </div>
    )
}