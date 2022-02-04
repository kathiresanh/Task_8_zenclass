// Question No:1
// write a class Movie



class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating==undefined ? "PG" :rating ;
    }

}

const movie1 = new Movie("iron man","red jiant","pg13")
const movie2 = new Movie("casion royal","Eon production","PG13")
console.log(movie1)
console.log(movie2)


//      Question no :3
// Write a “person” class to hold all the details.


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const kathir = new Person("kathir",25);
const vijay = new Person("vijay",27)
console.log(kathir)
console.log(vijay)


// QUESTION NO: 4
// write a class to calculate uber price.

class Uber {
    constructor(name,km,price){
        this.name = name;
        this.km =km;
        this.price = price;
    }

    getprice(){
      let  payable = this.km*this.price;
      console.log(payable)
    }
}

const drive1 = new Uber("kathir",100,8);
drive1.getprice();