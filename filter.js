const numbers = [2,4,57,5,3];
const friends = ['Rafiq', 'Jabbar', 'Barkat'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 100},
    {id: 3, name: 'watch', price: 20},
    {id: 4, name: 'tablet', price: 10},
];
const cheaper = products.filter(pd =>pd.price < 100);
// console.log(cheaper);
// remove an item using filter
const remaining = products.filter(pd =>pd.id !=3);
console.log(remaining);