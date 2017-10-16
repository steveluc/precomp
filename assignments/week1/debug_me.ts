interface Person {
    name: string;
    age: number;
    phone?: string;
    car: string;
    nationality: string;
}
function add10(h:Person) {
    return `\n Name: ${h.name} \n Age: ${h.age} \n Phone: ${h.phone} \n Car: ${h.car} \n Age in 5 Years: ${h.age + 5}`;
}   
function add11(n:Person) {
    return `\n Name: ${n.name} \n Age: ${n.age} \n Phone: ${n.phone} \n Car: ${n.car} \n Age in 5 Years Multiplied by 2: ${(n.age + 5)* 2}`
}

let y:Person = {name: 'Henry', age: 16, phone: 'Galaxy S7', car: 'VW Jetta', nationality: "American"};
let h:Person = {name: "Geovanni", age: 34, car: "Ferrari 488 Italia", phone: "Blackberry", nationality: "Italian"}
let z = 2;

console.log(add10(y));
console.log(add11(h));

