//classes
class people {

    constructor() {
        this.peopleList = [];
    }

    addPeople(person) {
        this.peopleList.push(person)
    }

    getAll() {
        return this.peopleList
    }
}

//herança
class customer extends people {
    constructor() {
        super().addPeople({ name: 'Cliente 1' })
    }
}

//Interface
/*interface IPeople {
    addPeople()
    removePeople()
    search()
}*/

const _people = new people();
_people.addPeople({ name: 'João' })

console.log('Lista ', _people.getAll())

const _customer = new customer();
_customer.addPeople({ name: 'teste' })
_customer.addPeople({ name: 'teste1' })
_customer.addPeople({ name: 'teste2' })
console.log('Cliente', _customer.getAll())