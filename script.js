let person = {
    name: 'Yahyo',
    surname: 'Hitler',
    age: 18
}

person.age = 50
person.address = 'Germany'

person['age'] = 100
person['surname'] = 'Adolf'
person['name'] = 'Hitler'



let car = {
    brand: 'BMW',
    model: 'm5asfalt8',
    horsePower: '150',
    start: function () {
        console.log('Машина зводится');
    }
}

car.color = 'Black'
car.horsePower = 1200
delete car.model

console.log(person);

// car.start()
// console.log(car);

let car2 = {
    brand: 'BMW',
    model: 'm5asfalt8',
    horsePower: '150',
    engine: 'v15',
    driver: 'Gryu',
    start: function () {
        console.log('Машина зводится');
    }
}

car2.model = '250gogogo3';


let company = {
    name: 'GitHub',
    owner: {
        name: 'Adolf',
        surname: 'Gitler',
        networth: '5.5 billiard',
        address: {
            city: 'America',
            street: 'Africa Street 77'
        }
    }
}

company.owner.name = 'Adolf'
company.owner.surname = 'Gitler'

let book = {
    title: 'Война и Мир',
    author: 'Лев Яхё',
    year: 1935
}

let book2 = {
    title: 'Война и Мир2',
    author: 'Лев Яхё',
    year: 2050
}

book.price = '2000$'    

function print(obj) {
    for(let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

// print(book)
// print(book2)
// console.log(company);

let school = {
    name: 'Congresman School Polatovna',
    director: 'Shrek Balotov',
    teachers: {
        math: 'Staraya karga',
        geograpgy: 'Sasha Durrov',
        history: 'Shrek bolotev'
    },
    students: {
        1: 'Dyadya Vanya',
        2: 'Tyotya Liza',
        3: 'Brat Vadim'
    },
    hasEatery: false,
    hasToilet: true,
    rooms: 163
}

school.hasEatery = true
school.hasToilet = false

console.log(school);