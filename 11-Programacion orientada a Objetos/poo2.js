
/*
class Estudiante {
    constructor(nombre,asignaturas){
        this.nombre = nombre;
        this.asignaturas= asignaturas;

    }
    obtenDatos() {
        return {nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const luis = new Estudiante(luis,[javascript])
*/
class Estudiante {
    constructor (nombre, asignaturas) {
      this.nombre = nombre;
      this.asignaturas = asignaturas;
    }
    
    // Método
    obtenDatos() {
        return {nombre: this.nombre,
            asignaturas: this.asignaturas
        } 
     }
  }
  
  const luis = new Estudiante('luis', ["javascipt","css","html"]);
  
  console.log(luis.obtenDatos()); // 100