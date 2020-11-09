import API from './api'

export default class Items {
    constructor() {
        this.link = new API().link
    }
    
    getCategories(hash) {
        return fetch(this.link+"api.categories.get", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash})
        })
    }

    addCategory(hash, parent_id, name, description) {
        return fetch(this.link+"api.category.add", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash, parent_id, name, description})
        })
    }

    getCategory(hash, id) {
        return fetch(this.link+"api.category.get", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash, id})
        })
    }

    editCategory(hash, id, name, description, parent_id) {
        return fetch(this.link+"api.category.edit", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash, id, name, description, parent_id})
        })
    }
}