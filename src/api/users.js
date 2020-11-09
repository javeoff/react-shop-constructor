import API from './api'

export default class Users {
    constructor() {
        this.link = new API().link
    }

    loginUser(login, password, hash) {
        return fetch(this.link+"api.user.login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            login: login, //user_login.value
            password: password, //password
            hash: hash
          })
        })
    }
    
    getUser(hash) {
        return fetch(this.link+"api.user.get", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({hash})
        })
        //.catch(e => setTimeout(() => this.getUser(hash), 3000))
    }
}