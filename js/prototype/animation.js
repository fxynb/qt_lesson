function Animal(planet){
    this.planet = planet;
}
// constructor 函数是js的一等对象
// 原型对象return{planet}
Animal.prototype.getPlanet = function(){
    return this.planet;
}
function Person(name){
    this.name = name;
}
// 人类也在地球
// 原型链 animal => Animal.Protype => Object
Person.prototype = new Animal('earth');
Person.prototype.getName= function(){
    return this.name;
}
const person= new Person("三水清");
console.log(person.getPlanet());
console.log(person.getName());
console.log(Person.prototype._proto_===Animal.prototype);