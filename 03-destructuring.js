const user = {
  name: 'John',
  age: 25,
  email: 'john@mail.com',
  city: 'London',
  country: 'England',
  skills: ['JavaScript', 'React', 'Node', 'Python']
}

// Destructuring
// Para desestruturar um objeto, basta colocar as chaves e o nome das propriedades que você quer desestruturar.
// Para renomear a propriedade, basta colocar o nome da propriedade seguido de dois pontos e o nome que você quer.
const { name, city: cidade, skills } = user

// Para desestruturar um objeto, basta colocar as chaves e o nome das propriedades que você quer desestruturar.
const [firstSkill, secondSkill] = skills

console.log(cidade)