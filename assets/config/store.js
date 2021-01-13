import { observable, action } from 'mobx'

class Store {
    @observable deneme
 
    
    @action _deneme(veri) {
        this.deneme = veri
    }

}

export default new Store()