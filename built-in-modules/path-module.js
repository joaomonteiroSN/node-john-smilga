const path = require("path")

const filePath = path.join('./subfolder','text.txt')

console.log(filePath)

const baseName = path.basename(filePath)

console.log(baseName)

//próximo método retorna o caminho absoluto, isso é imortante pois a aplicação vai rodar em diferentes ambientes
const absolute = path.resolve(__dirname, 'subfolder', 'text.txt')
console.log(absolute)