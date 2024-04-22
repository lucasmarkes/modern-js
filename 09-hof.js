const array = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: 1 },
]

//  HOF - Higher Order Function

// Find - busca um item no array
const find = array.find(item => item.product === 'mango')
console.log(find)

// FindIndex - busca um item no array e retorna o índice
const findIndex = array.findIndex(item => item.product === 'mango')
console.log(findIndex)

// sOME - verifica se algum item atende a condição
const hasExpensive = array.some(item => item.price >= 6)
console.log(hasExpensive)

// Every - verifica se todos os itens atendem a condição
const allExpensive = array.every(item => item.price >= 1)
console.log({allExpensive})

// Map - mapeia o array e retorna um novo array
const array2 = array.map(item => item.product)
console.log(array2)

// Filter - filtra o array e retorna um novo array
const array3 = array.filter(item => item.price > 1)
console.log(array3)

// Reduce - reduz o array a um único valor
// Para entender melhor, o reduce recebe 2 parâmetros, o primeiro é uma função que recebe 2 parâmetros, o acumulador e o item, e o segundo parâmetro é o valor inicial do acumulador, que no caso é 0, e o reduce vai somando o valor do acumulador com o valor do item do array e retornando o valor final do acumulador.
// Pode ser utilizado apra transformar um array em um único valor, como por exemplo, somar todos os preços do array.
const total = array.reduce((acc, item) => acc + item.price, 0)
console.log({total})
