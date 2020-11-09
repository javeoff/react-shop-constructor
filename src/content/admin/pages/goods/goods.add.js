import React, {useState} from 'react'
import { FormControl, Button } from 'react-bootstrap';

import Items from '../../../../api/items'

export default function(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    const [category, setCategory] = useState('')
    const [count, setCount] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Создать')

    const createItem = async () => {
        const res = await (await new Items().addItem(props.cookies.hash, name, price, photo, category, count, description)).json()
        if (res.logged) setStatus(res.inform)
    }

    return (
        <div>
            <h1>Добавить товар</h1>
            <div className="card card-xs">
                <div>
                    <label for="item-name">Название товара</label>
                    <FormControl
                    id="item-name"
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-price">Цена</label>
                    <FormControl
                    id="item-price"
                    onChange={(e) => setPrice(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-description">Описание</label>
                    <FormControl
                    id="item-description"
                    onChange={(e) => setDescription(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-count">Количество</label>
                    <FormControl
                    id="item-count"
                    onChange={(e) => setCount(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-photo">Фотография</label>
                    <FormControl
                    id="item-photo"
                    onChange={(e) => setPhoto(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-category">ID Категории</label>
                    <FormControl
                    id="item-category"
                    onChange={(e) => setCategory(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                <Button variant="primary" onClick={createItem}>{status}</Button>
                </div>
            </div>
        </div>
    )
}