import React, {useState, useEffect} from 'react'
import { FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faInbox, faQuestion, faTrash } from '@fortawesome/free-solid-svg-icons'

import Items from '../../../../api/items'
import Categories from '../../../../api/categories'

export default function(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function itemList() {
            if (items.length === 0) {
                const res = await (await new Items().getItems(props.cookies.hash)).json()
                if (res.logged) {
                    delete res.logged
                    for (let item of Object.values(res)) {
                      item.category_id = await getCategoryName(item.category_id)
                    }
                    console.log(Object.values(res));
                    setItems(Object.values(res))
                }
            }
        }
        itemList()
    })

    const editItem = (e) => {
      const id = e.target.dataset.id
      props.editItem(id)
    }

    const removeItem = async id => {
      const res = await (await new Items().removeItem(props.cookies.hash, id)).json()
      if (res.logged) {
        setItems([])
        props.setModal(false)
      }
    }

    const deleteItem = (e) => {
      const id = e.target.dataset.id
      props.openModal("Вы уверены, что хотите удалить запись?", removeItem, [id])
    }

    const getCategoryName = async id => {
      const res = await (await new Categories().getCategory(props.cookies.hash, id)).json()
      if (res.name) return res.name
      else return ''
    }

    return (
        <div>
            <h1>Список товаров</h1>
            <div className="products__table">
                  <div class="products__row products__row_head">
                    <div class="products__cell"><label class="checkbox"><input class="checkbox__input" type="checkbox" /><span class="checkbox__in"><span class="checkbox__tick"></span></span></label></div>
                    <div class="products__cell">Товар</div>
                    <div class="products__cell">Количество</div>
                    <div class="products__cell">Категория</div>
                    <div class="products__cell">Цена</div>
                    <div class="products__cell">Опции</div>
                  </div>
                { items.map(item => 
                    <div class="products__row"> 
                    <div class="products__cell"><label class="checkbox"><input class="checkbox__input" type="checkbox" /><span class="checkbox__in"><span class="checkbox__tick"></span></span></label></div>
                    <div class="products__cell"><a class="products__item" href="#">
                        <div class="products__preview"><img class="products__pic" src="img/product-pic.png" alt="" /></div>
                        <div class="products__details">
                          <div class="products__title title">{item.name}</div>
                          <div class="products__info caption color-gray">{item.description}</div>
                        </div>
                      </a></div>
                    <div class="products__cell">
                      <div class="products__payment">{item.count} шт.</div>
                    </div>
                    <div class="products__cell">
                      <div class="products__color">
                        <div class="products__bg" style={{backgroundColor: "#6C5DD3"}}></div>
                        <div class="products__text">{item.category_id}</div>
                      </div>
                    </div>
                    <div class="products__cell">
                      <div class="products__cost">
                      <div class="products__money">{item.price} RUB</div>
                      </div>
                    </div>
                    <div class="products__cell">
                      <div class="products__edit">
                          <a href="#"><span class="color-green" data-id={item.id} onClick={editItem}>Редактировать</span></a> |
                          <a href="#"><span class="color-green" data-id={item.id} onClick={deleteItem}>Удалить</span></a>
                          </div>
                    </div>
                  </div>
                )}

                {/* <div className="item">
                    <span className="position">{item.id}</span>
                    <span className="item-img"></span>
                    <div className="info">
                        <span className="item-name">{item.name}</span>
                        <span className="category">{item.category_id}</span>
                    </div>
                    <span className="price">{item.price} RUB</span>
                    <div className="doItem">
                        <span className="doItem-edit"><FontAwesomeIcon icon={faEdit} /></span>
                        <span className="doItem-delete"><FontAwesomeIcon icon={faTrash} /></span>
                        <span className="doItem-info"><FontAwesomeIcon icon={faQuestion} /></span>
                        <span className="doItem-category"><FontAwesomeIcon icon={faInbox} /></span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}