const nombre= "luis"
const apellido = "david"

const nombreCompleto = {
    nombre: "luis",
    apellido: "david"
}

sessionStorage.setItem("nombre completo",JSON.stringify(nombreCompleto))
localStorage.setItem("nombre completo",JSON.stringify(nombreCompleto))

document.cookie = `Nombre completo= ${JSON.stringify(nombreCompleto)};expires=` + new Date(2022,9,20).toUTCString()