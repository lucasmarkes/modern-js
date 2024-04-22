// Arrow function !== function

function myFunction() {
  // Tem o seu próprio this.
  // this é a função, é o valor dessa função, podemos atribuir valores para dentro do this, tudo no JS é um objeto.
  // função com construtor é basicamente um objeto.
  // para fornecer um construtor para a função, basta chamar a funcão com new (new myFunction()) -> retorna um object
  this.name = 'Lucas'
}

const myArrowFunction = () => {
  // Tem o this do escopo onde é criado.
  // não tem construtor, logo, não pode ser chamada com o new
  // nesse caso, como a função está solta, o this que é englobado nessa função é o do node. 
  // qualquer coisa que for inserida nesse this, entra no contexto do this da utilização.
 }

// A única coisa que difere entre esses dois tipos de função é o contexto do objeto this.

console.log(new myFunction())

// arguments é uma variável do js (keyword) que automaticamente reconhece tudo que é passado para dentro de uma função
// também pode pegar tudo que é passado para a função com rest operator -> ...parametros