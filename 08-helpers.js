const tech = 'Node.js'
const arrayTech = ['Node.js', 'React.js', 'React Native']

// Includes: verifica se a string contém a substring passada como argumento
// É case sensitive.
const includes = tech.includes('Node')
const includesArray = arrayTech.includes('React.js')
console.log({includes})
console.log({includesArray}) 

// StartsWith: verifica se a string começa com a substring passada como argumento
// É case sensitive.
const startsWith = tech.startsWith('N')
console.log({ startsWith })

// EndsWith: verifica se a string termina com a substring passada como argumento
// É case sensitive.
const endsWith = tech.endsWith('js')
console.log({ endsWith })