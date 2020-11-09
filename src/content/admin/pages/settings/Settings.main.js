import React from 'react'
import { FormControl, Button } from 'react-bootstrap';
import './Settings.css'

export default function(props) {
    return (
        <>
        <h1>Настройки сайта</h1>
        <div className="cards">
            <div className="card card-ls">
                <div>
                    <label for="site-name">Название Сайта</label>
                    <FormControl
                    id="site-name"
                    value="Cube"
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="site-name">Домен</label>
                    <FormControl
                    id="site-link"
                    value="cubeweb.com"
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                <Button variant="primary">Сохранить</Button>
                </div>
            </div>
            <div className="card card-lm card-blue">
                <div>
                    <label for="site-name">IP/Домен хост</label>
                    <FormControl
                    id="site-name"
                    value="Cube"
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="site-name">Пользователь</label>
                    <FormControl
                    id="site-link"
                    value="cubeweb.com"
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="site-name">Пароль</label>
                    <FormControl
                    id="site-link"
                    value="cubeweb.com"
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                <Button variant="primary">Сохранить</Button>
                </div>
            </div>
        </div>
        </>
    )
}