import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
       this._types = [
           {id:1, name: "Name1"},
           {id:2, name: "Name2"}
       ]
        this._brands = [
            {id:1, name: "Brand1"},
            {id:2, name: "Brand2"}
        ]
        this._devices = [
            {id:1, name: "Brand1", price: 30, rating: 4, img: `https://png.pngitem.com/pimgs/s/39-391150_transparent-electronic-png-device-clip-art-png-download.png`},
            {id:2, name: "Brand1", price: 30, rating: 4, img: `https://png.pngitem.com/pimgs/s/39-391150_transparent-electronic-png-device-clip-art-png-download.png`},
            {id:3, name: "Brand1", price: 30, rating: 4, img: `https://png.pngitem.com/pimgs/s/39-391150_transparent-electronic-png-device-clip-art-png-download.png`},
            {id:4, name: "Brand1", price: 30, rating: 4, img: `https://png.pngitem.com/pimgs/s/39-391150_transparent-electronic-png-device-clip-art-png-download.png`},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
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