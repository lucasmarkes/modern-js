const user = {
  name: 'John',
  age: 25,
  email: 'john@mail.com',
  city: 'London',
  country: 'England',
  skills: ['JavaScript', 'React', 'Node', 'Python'],
  active: false
}

// Spread = espalhar
// Se existem duas propriedades com o mesmo nome, a última propriedade vai sobrescrever a primeira.
// Imutabilidade: o spread não altera o objeto original.
// O spred é sempra a primeira propriedade do objeto.

const copiedUser = { ...user, name: 'Peter', skills: ['HTML', 'CSS'] }

console.log(copiedUser)