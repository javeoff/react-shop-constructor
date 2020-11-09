import React, {useEffect, useState} from 'react'
import { FormControl, Button } from 'react-bootstrap';

import Categories from '../../../../api/categories'

export default function(props) {
    const [id, setId] = useState(props.id)
    const [name, setName] = useState(null)
    const [parentId, setParentId] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() => {
        async function getCategory() {
            console.log(props.cookies.hash, id);
            const res = await (await new Categories().getCategory(props.cookies.hash, id)).json()
            console.log('edit categry');
            if (res.logged) {
                setName(res.name)
                setDescription(res.description)
                setParentId(res.parent_id)
            }
        }
        getCategory()
    }, [])

    const editCategory = async () => {
        const res = await (await new Categories().editCategory(props.cookies.hash, id, name, description, parentId)).json()
        if (res.logged) props.setActivePage('category-list')
    }

    return (
        <div>
            <h1>Редактировать Категорию</h1>
            <div className="card card-xs">
                <div>
                    <label for="category-name">Название Категории</label>
                    <FormControl
                    id="category-name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="category-description">Описание</label>
                    <FormControl
                    id="category-description"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                    <label for="category-parentid">Родительская категория</label>
                    <FormControl
                    id="category-parentid"
                    defaultValue={parentId}
                    onChange={(e) => setParentId(e.target.value)}
                    aria-describedby="basic-addon1"
                    />
                </div>

                <div>
                <Button variant="primary" onClick={editCategory}>Редактировать</Button>
                </div>
            </div>
        </div>
    )
}