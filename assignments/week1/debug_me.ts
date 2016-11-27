interface Person {
    name: string;
    age: number;
    phone?: string;
    car: string;
}
function add10(n:Person) {
    return `\n Name: ${n.name} \n Age: ${n.age} \n Phone: ${n.phone} \n Car: ${n.car}`;
}

let y:Person = { name: 'Henry', age: 16, phone: 'Galaxy S7', car: 'VW Jetta'};
let z = 2;

console.log(add10(y));

