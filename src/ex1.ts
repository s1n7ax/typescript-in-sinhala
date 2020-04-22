interface A {
    name: string;
    printName(): void;
}

class B implements A {
    name: string = '';

    printName(): string {
        console.log(this.name);
        return '';
    }
}
