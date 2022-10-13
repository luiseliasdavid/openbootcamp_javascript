let nombre= 'Luis'
let apellido= 'David'

let estudiante= nombre.concat(' ',apellido)

let estudianteMayus= estudiante.toLocaleUpperCase()
let estudianteMinus= estudiante.toLocaleLowerCase()
let longitud= estudiante.length
let primeraLetra= nombre[0]
let ultimaLetra = apellido[apellido.length-1]
let sinEspacio= estudiante.replace(' ','')
let incluye= estudiante.includes(nombre)




console.log(incluye)