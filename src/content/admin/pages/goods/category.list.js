import React, {useState, useEffect} from 'react'
import { FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faInbox, faQuestion, faTrash } from '@fortawesome/free-solid-svg-icons'

import Categories from '../../../../api/categories'

export default function(props) {
    const [category, setCategories] = useState([])

    useEffect(() => {
        async function categoryList() {
            if (category.length === 0) {
                const res = await (await new Categories().getCategories(props.cookies.hash)).json()
                if (res.logged) {
                    delete res.logged
                    console.log(Object.values(res));
                    setCategories(res)
                }
            }
        }
        categoryList()
    })

    const editCategory = (e) => {
        const id = e.target.dataset.id
        props.editCategory(id)
    }

    const deleteCategory = (e) => {
        const id = e.target.dataset.id
    }

    return (
        <div>
            <h1>Список категорий</h1>
            <div className="products__table card-outbox">
            <div class="products__row products__row_head">
                    <div class="products__cell"><label class="checkbox"><input class="checkbox__input" type="checkbox" /><span class="checkbox__in"><span class="checkbox__tick"></span></span></label></div>
                    <div class="products__cell">Категория</div>
                    <div class="products__cell">Количество</div>
                    <div class="products__cell">Родитель</div>
                    <div class="products__cell">Опции</div>
                  </div>
                { Object.values(category).map(category => 
                    <div class="products__row"> 
                        <div class="products__cell"><label class="checkbox"><input class="checkbox__input" type="checkbox" /><span class="checkbox__in"><span class="checkbox__tick"></span></span></label></div>
                        <div class="products__cell"><a class="products__item" href="#">
                            <div class="products__preview"><img class="products__pic" src="img/product-pic.png" alt="" /></div>
                            <div class="products__details">
                            <div class="products__title title">{category.name}</div>
                            <div class="products__info caption color-gray">{category.description}</div>
                            </div>
                        </a></div>
                        <div class="products__cell">
                        <div class="products__payment">{category.category_id}</div>
                        </div>
                        <div class="products__cell">
                        <div class="products__color">
                            <div class="products__bg" style={{backgroundColor: "#6C5DD3"}}></div>
                            <div class="products__text">{category.parent_id}</div>
                        </div>
                        </div>
                        <div class="products__cell">
                        <div class="products__edit">
                            <a href="#"><span class="color-green" data-id={category.category_id} onClick={editCategory}>Редактировать</span></a> |
                            <a href="#"><span class="color-green" data-id={category.category_id} onClick={deleteCategory}>Удалить</span></a>
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className="row">
                    <input type="checkbox "></input>
                    <div className="info">
                        <span className="item-name">{category.name}</span>
                        <span className="category">{category.description}</span>
                    </div>
                    <div className="flex">
                        <span className="color" style={{backgroundColor:"#ff5500"}}></span>
                        <span className="parent">{category.parent_id}</span>
                    </div>
                    <div className="flex doitem">
                        <a href="/"><span> Редактировать</span></a>
                        <span> | </span>
                        <a href="/"><span>Удалить</span></a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}