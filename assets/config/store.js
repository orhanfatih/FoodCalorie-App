import { observable, action } from 'mobx'

class Store {
    @observable deneme

    @observable subfood1
    @observable subfood2
    @observable subfood3
 
    
    @action _deneme(veri) {
        this.deneme = veri
    }

    @action _subfood1(veri) {
        this.subfood1 = veri
    }
    @action _subfood2(veri) {
        this.subfood2 = veri
    }
    @action _subfood3(veri) {
        this.subfood3 = veri
    }

}

export default new Store()