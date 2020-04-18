const printName = function (name: string): void {
    console.log(name);
};

class Cat {
    static className = 'Cat';
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    static printClassName() {
        console.log(Cat.className);
    }

    printName() {
        console.log(this.name);
    }
}

printName('Srinesh');

const c = new Cat('garfield');
c.printName();
Cat.printClassName();
