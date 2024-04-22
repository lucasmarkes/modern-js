const user = {
  name: 'John',
  age: 25,
  email: 'john@mail.com',
  city: 'London',
  country: 'England',
  skills: ['JavaScript', 'React', 'Node', 'Python']
}

// Rest = restante
// Para pegar o restante das propriedades de um objeto, basta colocar três pontos e o nome que você quer.
// O rest tem quer ser a última propriedade do objeto.
const { name, skills, ...rest } = user

// No array funciona da mesma forma que no objeto.
const [firstSkill, ...restoSkills] = skills

console.log(skills)