import { observable, action } from 'mobx'

class Store {
    @observable subfood1
    @observable subfood2
    @observable subfood3

    @observable carbohydrate
    @observable fat
    @observable protein
    @observable sugars
    @observable calorie
 

    @action _subfood1(veri) {
        this.subfood1 = veri
    }
    @action _subfood2(veri) {
        this.subfood2 = veri
    }
    @action _subfood3(veri) {
        this.subfood3 = veri
    }
    @action _subfoodchoosen(veri) {
        this.subfoodchoosen = veri
    }

    @action _carbohydrate(veri) {
        this.carbohydrate = veri
    }
    @action _fat(veri) {
        this.fat = veri
    }
    @action _protein(veri) {
        this.protein = veri
    }
    @action _sugars(veri) {
        this.sugars = veri
    }
    @action _calorie(veri) {
        this.calorie = veri
    }

}

export default new Store()