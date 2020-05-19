class Dragon {
    constructor(name, food) {
        this.name = name;
        this.food = food;
    }

    preference() {
        console.log(`${this.name} likes ${this.food}`)
    } 
}

let fluffikins = new Dragon('Fluffy', 'waffle')
fluffikins.preference()


class Animal {
    constructor(name) {
        this.speed = 0
        this.name = name
    }
    run(speed) {
        this.speed += speed
        console.log(`${this.name} бежит со скоростью ${this.speed} км в секунду.`)
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит.`)
    }
}

let animal = new Animal('Мой питомец')
animal.stop()
animal.run(322)