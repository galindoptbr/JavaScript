

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

  