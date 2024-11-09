//Objetos
let persona = {
    nombre: 'luis',
    edad: 25,
    comidaFavorita: 'arepa',
    saludar: function(nomb) {
        return 'Hola ' + nomb
    },
    saludoPersonal: function() {
        return 'hola, yo me llamo ' + this.nombre
    },
    birthday: function() {
        return 'Mi año de nacimiento es ' + (2024 - this.edad)
    }
}
/*console.log(persona.nombre),
console.log(persona.edad),
console.log(persona.comidaFavorita),
console.log(persona.saludar("Juan"))
console.log(persona.saludoPersonal())
console.log(persona.birthday())
*/
//Destructory
let {nombre, edad} = persona 
if (nombre == 'luis' && edad == 25) {
    console.log('Soy yo')
}

