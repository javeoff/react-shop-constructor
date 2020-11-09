import React, {useState} from 'react';
import { Button, Container, InputGroup, FormControl} from 'react-bootstrap';
import User from '../../api/users'
import MD5 from "crypto-js/md5";
import { useCookies } from 'react-cookie';


export default function(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['hash']);
    const [errorMsg, setErrorMsg] = useState(null)

    function validProps() {
        let login = document.getElementById('login')
        let password = document.getElementById('password')

        login.classList.remove('errorInput')
        password.classList.remove('errorInput')

        if (login.value.length < 3) {
            login.classList.add('errorInput')
            setErrorMsg("Длина логина должна быть больше, чем 3")
        }
        else if (password.value.length < 5) {
            password.classList.add('errorInput')
            setErrorMsg("Длина пароля должна быть больше, чем 5")
        }
        else {
            login = login.value
            password = password.value
            loginUser(login, password)
        }
    }

    async function loginUser(login, password) {
        password = MD5(password).toString()
        const hash = MD5(Math.random()).toString()

        const response = await (await new User().loginUser(login, password, hash)).json()
        const inform = response.inform
        const logged = response.logged

        if (logged) {
            setCookie('hash', hash, { path: '/' });
            props.history.push('/admin')
        }
        else {
            setErrorMsg(inform)
        }
    }

    function PushEnter(e) {
        if(e.key == 'Enter'){
            validProps()
        }
    }

    function saveCookie(e) {
        e.target.classList.toggle('button-active')
    }

    return (
        <Container>
            <div class="row page-login">
                <div className="card card-login">
                    <h1 className="card-name">Добро пожаловать</h1>
                    <InputGroup className="mb-3">
                        <FormControl
                        id="login"
                        placeholder="Логин"
                        aria-label="Логин"
                        onKeyPress={PushEnter}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        type="password"
                        id="password"
                        placeholder="Пароль"
                        aria-label="Пароль"
                        onKeyPress={PushEnter}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Button className="card-button" onClick={validProps}>Войти в аккаунт</Button>
                        <Button onClick={saveCookie} className="card-protect" variant="light">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-shield-fill-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 0 0-2.772.815 1.454 1.454 0 0 0-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 0 0 2.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 0 0-1.003-1.184 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5zm2.854 6.354a.5.5 0 0 0-.708-.708L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                        </svg>
                        </Button>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        { errorMsg ? 
                            <div class="alert alert-danger card-warning" role="alert">
                                {errorMsg}
                            </div>
                        : <span>Admin panel by <b>Cube</b></span>}
                        
                    </InputGroup>
                </div>
            </div>
        </Container>
    )
}