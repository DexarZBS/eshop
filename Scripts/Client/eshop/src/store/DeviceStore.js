import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
      this._types = [
          {id:1, name:'Музыка'},
          {id:2, name:'Фотография'}
      ]
        this._brands = [
            {id:1, name:'Square Enix'},
            {id:2, name:'Groove street games'}
        ]
        this._devices = [
            {id:1, name:'Far Cry 2', price: 30, rating: 4, img:'https://upload.wikimedia.org/wikipedia/ru/9/97/Far_Cry_2_cover_art.jpg'},
            {id:2, name:'Far Cry 2', price: 30, rating: 4, img:'https://upload.wikimedia.org/wikipedia/ru/9/97/Far_Cry_2_cover_art.jpg'},
            {id:3, name:'Far Cry 2', price: 30, rating: 4, img:'https://upload.wikimedia.org/wikipedia/ru/9/97/Far_Cry_2_cover_art.jpg'},
            {id:4, name:'Far Cry 2', price: 30, rating: 4, img:'https://upload.wikimedia.org/wikipedia/ru/9/97/Far_Cry_2_cover_art.jpg'},
            ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types=types
    }
    setBrands(brands) {
        this._brands=brands
    }
    setDevices(devices) {
        this._devices=devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}