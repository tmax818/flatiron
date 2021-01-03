const fs = require("fs")
const data = require("./data")

const labs = fs.createWriteStream("./labs.md")
const lectures = fs.createWriteStream("./lectures.md")


// data.map(el => { 
//     el.lab ? labs.write(` - [${el.title}](labs/${el.link})\n`) : lectures.write(` - [${el.title}](lectures/${el.link})\n`)
// })

data.map(el => { 
    if(el.lab){
        labs.write(` - [${el.title}](labs/${el.link})`)
        labs.write(` - [link](https://github.com/learn-co-students/${el.link})\n`)
    } else {
        lectures.write(` - [${el.title}](lectures/${el.link}/README.md)\n`)
    }
})