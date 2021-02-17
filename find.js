const numbers = [2,4,57,5,3];
const friends = ['Rafiq', 'Jabbar', 'Barkat'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 100},
    {id: 3, name: 'watch', price: 20},
    {id: 4, name: 'tablet', price: 10},
];
const hasWatch = products.find(pd=> pd.name === 'watch');
console.log(hasWatch);