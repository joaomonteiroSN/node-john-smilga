const { readFile, writeFile } = require('fs')


console.log('Começo da task')
readFile('./subfolder/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    console.log(result)

    readFile('./subfolder/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
    const second = result
    console.log(result)

    writeFile('./subfolder/write-file-test.txt', `This is the new result: ${first} and ${second}`, (err, result) => {
        if(err) {
            console.log(err)
            return
        }

        console.log('fora da sequencia')
    })
    })
})

console.log('finalizando a task')