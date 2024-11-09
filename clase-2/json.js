const fs = require('fs')

let data = fs.readFileSync('json.json', {encoding: "utf-8"}) //traer la data de json
data = JSON.parse(data) //cambia la data de string a objeto

data.nombre = 'luis'
data.edad = '25'
data.comidaFavorita = 'arepa'

console.log(data)

data = JSON.stringify(data) //LLeva la data de objeto a string

fs.writeFileSync('json.json', data) //Guardar en el json

