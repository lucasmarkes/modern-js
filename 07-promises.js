// Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.
// Uma Promise é um objeto retornado ao qual você anexa callbacks, em vez de passar callbacks para uma função.

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved')
  }, 2000)
})

console.log(apiCall)

// Existem 2 formas de pegar o valor de uma Promise:
// 1. Usando o método then() / catch()
// 2. Usando o método async/await

// 1. Usando o método then()
apiCall.then( (res) => {
  console.log(res) // Promise resolved
})

// 2. Usando o método async/await
async function getData() {
  const response = await apiCall
  console.log(response) // Promise resolved

  // para pegar o erro de uma Promise, usamos o try/catch
}

// A diferença entre o método then() e o async/await é que com o .then() ele segue a ordem de execução, enquanto o async/await espera a execução da Promise para continuar o código.