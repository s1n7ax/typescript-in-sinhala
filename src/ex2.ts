interface IAnimal {
    makeSound(): void;
}

class Dog implements IAnimal {
    makeSound(): void {
        console.log('wuff');
    }

    tailWag() {
        console.log('wail wag');
    }
}

class Cat implements IAnimal {
    makeSound(): void {
        console.log('meaw');
    }
}

let animal: IAnimal = new Dog();
animal.makeSound();
animal = new Cat();
animal.makeSound();
