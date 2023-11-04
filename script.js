//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log("The " + this.species + " make a sound")
	}
}

class Dog extends Animal {
  bark(){
	  
	  console.log("woof");
  }
}

class Cat extends Animal {
	purr(){
console.log("purr")}
}
var animal= new Animal("Dog");
animal.makeSound();
var dog= new Dog();
dog.bark();
var cat =new Cat();
cat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
