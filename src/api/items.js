import API from './api'

export default class Items {
    constructor() {
        this.link = new API().link
    }
    
    getItems(hash) {
        return fetch(this.link+"api.items.get", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash})
        })
    }

    addItem(hash, name, price, img, category_id, count, description) {
        return fetch(this.link+"api.item.add", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash, name, price, img, category_id, count, description})
        })
    }

    removeItem(hash, id) {
        return fetch(this.link+"api.item.remove", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash, id})
        })
    }

    editItem(hash, id, name, price, img, category_id, count, description) {
        return fetch(this.link+"api.item.edit", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash, id, name, price, img, category_id, count, description})
        })
    }

    getItem(hash, id) {
        return fetch(this.link+"api.item.get", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash, id})
        })
    }
}