const products = [
    {name: 'Banana', price: 10, category: 'A'},
    {name: 'Pera', price: 20, category: 'B'},
    {name: 'Abacate', price: 30, category: 'C'},
    {name: 'Morango', price: 40, category: 'A'}
];

const filterProducts = products
    .filter(product => product.price > 15  && product.category === 'A')
    .map(product => ({ name: product.name, discountedPrice: product.price * 0.9}));

console.log(filterProducts);

const solas = [
    {Fornecedor: 'Antaris', Codigo: 71, Estante: 'A'},
    {Fornecedor: 'Anauco', Codigo: 72, Estante: 'B'},
    {Fornecedor: 'IPR', Codigo: 73, Estante: 'C'},
    {Fornecedor: 'IMG', Codigo: 74, Estante: 'A'},
    {Fornecedor: 'Globiglore', Codigo: 75, Estante: 'B'},
    {Fornecedor: 'Forever', Codigo: 76, Estante: 'C'}
];

const filterEstant = solas
    .filter(soled => soled.Codigo > 73 && soled.Estante === 'A')
    .map(soled => ({ Fornecedor: soled.Fornecedor, Carros: soled.Estante}));

console.log(filterEstant);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers
    .filter(pares => pares % 2 === 0);

console.log(evenNumbers);

const words = ['hello', 'bag', 'penapple', 'cadlock'];

const lengths = words.map(word => word.length);

console.log(lengths);

const songs = [
    {title: 'Song A', duration: 240},
    {title: 'Song B', duration: 300},
    {title: 'Song C', duration: 120},
    {title: 'Song D', duration: 150},
    {title: 'Song E', duration: 360},
];

const longSongs = songs.filter(song => song.duration > 240);

console.log(longSongs);