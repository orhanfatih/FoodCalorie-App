import { observable, action } from 'mobx'

class Store {
    @observable mainfood1
    @observable mainfood2
    @observable mainfood3
    
    @observable subfood1
    @observable subfood2
    @observable subfood3
    @observable subfood4
    @observable subfood5

    @observable carbohydrate
    @observable fat
    @observable protein
    @observable sugars
    @observable calorie
 
    @action _mainfood1(veri) {
        this.mainfood1 = veri
    }
    @action _mainfood2(veri) {
        this.mainfood2 = veri
    }
    @action _mainfood3(veri) {
        this.mainfood3 = veri
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
    @action _subfood4(veri) {
        this.subfood4 = veri
    }
    @action _subfood5(veri) {
        this.subfood5 = veri
    }

    @action _weight1(veri) {
        this.weight1 = veri
    }
    @action _weight2(veri) {
        this.weight2 = veri
    }
    @action _weight3(veri) {
        this.weight3 = veri
    }
    @action _weight4(veri) {
        this.weight4 = veri
    }
    @action _weight5(veri) {
        this.weight5 = veri
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