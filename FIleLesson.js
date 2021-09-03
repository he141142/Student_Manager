const {readFileSync,writeFileSync} = require('fs')

const a = readFileSync('./content/subfolder/test.txt','utf-8')

console.log(a)

const content = "Overrided! ";
writeFileSync('./content/subfolder/test.txt',
content )


console.log(a)