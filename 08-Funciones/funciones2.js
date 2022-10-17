let funcion1 = ()=> true

console.log(funcion1())

let promesa= ()=>{
    return new Promise( (resolve)=>{
setTimeout(()=> resolve("hola soy una promesa"),5000)
    })
}

promesa().then((res=> console.log(res)))

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}



