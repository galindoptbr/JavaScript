const products = [
    {name: 'T-Shirt', price: 20},
    {name: 'Pant', price: 50},
    {name: 'Sneaker', price: 80},
    {name: 'Short', price: 40}
];

const less50 = products.filter(product => product.price < 50)
.map(product => product.name);

console.log(less50);

const words = ['paralelo', 'partida', 'picagem', 'producao'];

const upper = words.map(word => word.toUpperCase());
console.log(upper);

const books = [
    {book: 'God of War', publish: 1997},
    {book: 'King of Angels', publish: 2010},
    {book: 'Hellsgate', publish: 1942},
    {book: 'Harry Potter', publish: 2000}
];

const before2000 = books.filter(obj => obj.publish < 2000)
.map(obj => obj.book);

console.log(before2000);
    