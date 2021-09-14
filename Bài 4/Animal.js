class Animal{
    constructor(_name,_weight) {
        this.name = _name;
        this.weight = _weight;
    }
    setName(newName){
        this.name = newName;
    }
    setWeight(newWeight){
        this.weight = newWeight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        document.write("The Name is "+ this.name + " . The Weight is " + this.weight);
    }
}
let objAnimal1 = new Animal()
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
objAnimal1.toString();
let objAnimal2 = new Animal("Cat",10);
objAnimal2.setName("Mouse");
// objAnimal2.toString();


