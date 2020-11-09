import React, {useEffect, useState} from 'react'
import { FormControl, Button } from 'react-bootstrap';

import Items from '../../../../api/items'

export default function(props) {
    const [id, setId] = useState(props.id)
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [category, setCategory] = useState(null)
    const [count, setCount] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() => {
        async function getItem() {
            const res = await (await new Items().getItem(props.cookies.hash, id)).json()
            console.log('edit',res);
            if (res.logged) {
                setName(res.name)
                setPrice(res.price)
                setPhoto(res.image)
                setCategory(res.category_id)
                setCount(res.count)
                setDescription(res.description)
            }
        }
        getItem()
    }, [])

    const editItem = async () => {
        const res = await (await new Items().editItem(props.cookies.hash, id, name, price, photo, category, count, description)).json()
        if (res.logged) props.setActivePage('goods-list')
    }

    return (
        <div>
            <h1>Редактировать товар</h1>
            <div className="card card-xs">
                <div>
                    <label for="item-name">Название товара</label>
                    <FormControl
                    id="item-name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-price">Цена</label>
                    <FormControl
                    id="item-price"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-description">Описание</label>
                    <FormControl
                    id="item-description"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-count">Количество</label>
                    <FormControl
                    id="item-count"
                    defaultValue={count}
                    onChange={(e) => setCount(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-photo">Фотография</label>
                    <FormControl
                    id="item-photo"
                    defaultValue={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-category">ID Категории</label>
                    <FormControl
                    id="item-category"
                    defaultValue={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                <Button variant="primary" onClick={editItem}>Редактировать</Button>
                </div>
            </div>
        </div>
    )
}