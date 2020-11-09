import React, {useState} from 'react'
import { FormControl, Button } from 'react-bootstrap';

import Categories from '../../../../api/categories'

export default function(props) {
    const [name, setName] = useState('')
    const [parent_id, setParent] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Создать')

    const createItem = async () => {
        const res = await (await new Categories().addCategory(props.cookies.hash, parent_id, name, description)).json()
        if (res.logged) setStatus(res.inform)
    }

    return (
        <div>
            <h1>Добавить категорию</h1>
            <div className="card card-xs">
                <div>
                    <label for="item-name">Название категории</label>
                    <FormControl
                    id="item-name"
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-price">Родительская категория</label>
                    <FormControl
                    id="item-price"
                    onChange={(e) => setParent(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="item-photo">Описание</label>
                    <FormControl
                    id="item-photo"
                    onChange={(e) => setDescription(e.target.value)}
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