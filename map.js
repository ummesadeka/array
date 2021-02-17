const numbers = [2,4,57,5,3];
const friends = ['Rafiq', 'Jabbar', 'Barkat'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 100},
    {id: 3, name: 'watch', price: 20},
    {id: 4, name: 'tablet', price: 10},
];
// single line 
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(product => product.price);
console.log(prices);

// multi line
const prices2 = products.map(product =>  {
  return product.price;

})
console.log(prices2);