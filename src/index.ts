const _boolean: boolean = true;
console.log(`_boolean :: ${typeof _boolean}`);

const _number: number = 20;
console.log(`_number :: ${typeof _number}`);

const _string: string = 'string';
console.log(`_string :: ${typeof _string}`);

const array1: Array<number> = [1, 3];
const array2: number[] = [1, 3];
console.log(`array1 :: ${typeof array1}`);
console.log(`array2 :: ${typeof array2}`);

const _tuple: [string, boolean] = ['hello', true];
console.log(`_tuple :: ${typeof _tuple}`);

enum Color {
    RED,
    BLUE,
    GREEN,
}
const color: Color = Color.GREEN;
console.log(`Color :: ${typeof color}`);

const _null: null = null;
console.log(`_null :: ${typeof _null}`);

const _undifined: undefined = undefined;
console.log(`_undifined :: ${typeof _undifined}`);

const _object: object = {};
console.log(`_object :: ${typeof _object}`);

const _any: any = [1, 'string', undefined, Color.BLUE];
console.log(`_any :: ${typeof _any}`);
