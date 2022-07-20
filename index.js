function info() {
  let pregunta = prompt("Desea agregar a alguien a lista de comparación?");
  if (pregunta === "si" || pregunta === "Si" || pregunta === "SI") {
    const datos = [
      {
        nombre: prompt("nombre?"),
        apellido: prompt("apellido?"),
        edad: Number(prompt("edad?")),
      },
      {
        nombre: prompt("nombre?"),
        apellido: prompt("apellido?"),
        edad: Number(prompt("edad?")),
      },
      {
        nombre: prompt("nombre?"),
        apellido: prompt("apellido?"),
        edad: Number(prompt("edad?")),
      },
    ];

    class Dato {
      constructor(dato) {
        this.nombre = dato.nombre;
        this.apellido = dato.apellido;
        this.edad = dato.edad;
      }

      aviso() {
        alert(
          `Has añadido a la lista a: (${this.nombre} ${this.apellido}, de edad: ${this.edad} años))`
          );
          
      }
    }
    let personas = [];
   

    datos.forEach((dato) => {
      personas.push(new Dato(dato));
    });
    personas.forEach((lista) => {
      lista.aviso();
    });

    console.log(datos);
    console.log(personas);
  }
}

info();
