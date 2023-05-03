alert("Si es nuevo le pedimos de favor que se registre!");

class Usuarios {
  constructor(email, clave, nombre) {
    this.email = email;
    this.clave = clave;
    this.nombre = nombre;
  }
}

let listaDeUsuarios = [];

function ingresarUsuario() {
  let email = prompt("Proceso de registro,Ingrese su email");
  let clave = prompt("Proceso de registro,Ingrese una clave");
  let nombre = prompt("Proceso de registro,Ingrese su nombre");

  let nuevoUsuario = new Usuarios(email, clave, nombre);
  listaDeUsuarios.push(nuevoUsuario);
}
ingresarUsuario();

function buscarUsuario(confirmarMail) {
  let chequearEmail = prompt("Ingrese su email");
  return confirmarMail.email == chequearEmail;
}

let resultadoEmail = listaDeUsuarios.find(buscarUsuario);
if (resultadoEmail == undefined) {
  alert("Usuerio no encontrado, debe registrarse para comprar");
} else {
  function buscarClave(confirmarClave) {
    let chequearClave = prompt("Ingrese su password");
    return confirmarClave.clave == chequearClave;
  }
}

let resultadoClave = listaDeUsuarios.find(buscarClave);

if (resultadoClave == undefined) {
  alert("Su clave no coincide, debe registrarse para comprar");
} else {
  alert("Bienvenido a NEWSAN Aires");
}

class Equipo {
  constructor(numero, marca, tipo, frigorias, precio) {
    this.numero = numero;
    this.marca = marca;
    this.tipo = tipo;
    this.frigorias = frigorias;
    this.precio = precio;
  }

  cambioDePrecio(precio) {
    if (typeof precio == "number") {
      this.precio = precio;
    }
  }

  toString() {
    return `Equipo N°: ${this.numero}\n
    Aire marca: ${this.marca}\n 
    Tipo: ${this.tipo}\n 
    Frigorias: ${this.frigorias}\n
    Precio del equipo U$: ${this.precio}`;
  }
}

let equipo1 = new Equipo(1, "SURREY", "Split", "1800 fg", 0);
let equipo2 = new Equipo(2, "CARRIER", "Ventana", "3000 fg", 0);
let equipo3 = new Equipo(3, "BGH", "Piso techo", "4500 fg", 0);
let equipo4 = new Equipo(4, "SANYO", "Cassette", "5500 fg", 0);

equipo1.cambioDePrecio(200);
equipo2.cambioDePrecio(250);
equipo3.cambioDePrecio(350);
equipo4.cambioDePrecio(450);

alert(equipo1);
alert(equipo2);
alert(equipo3);
alert(equipo4);

let numeroElegido = Number(prompt("Seleccioná un N° de equipo"));

let usa = 470;

const cambioDivisa = (precio, usa) => {
  const calcular = precio * usa;
  return calcular;
};
const resultado = cambioDivisa("", usa);

if (numeroElegido === 1) {
  alert("Excelente elección");
  const resultado = cambioDivisa(equipo1.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("Esperamos verlo nuevamente");
} else if (numeroElegido === 2) {
  alert("Excelente elección");
  const resultado = cambioDivisa(equipo2.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("Esperamos verlo nuevamente");
} else if (numeroElegido === 3) {
  alert("Excelente elección");
  const resultado = cambioDivisa(equipo3.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("Esperamos verlo nuevamente");
} else if (numeroElegido === 4) {
  alert("Excelente elección");
  const resultado = cambioDivisa(equipo4.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("Esperamos verlo nuevamente");
} else {
  alert("Ese no es un dato válido");

  while (
    numeroElegido !== 1 ||
    numeroElegido !== 2 ||
    numeroElegido !== 3 ||
    numeroElegido !== 4
  ) {
    alert(
      "Tenemos cuatro equipos para ofrecerte. Por favor elige uno según su número"
    );
    alert(equipo1);
    alert(equipo2);
    alert(equipo3);
    alert(equipo4);
    let numeroElegido = Number(prompt("Seleccioná un N° de equipo"));
    if (numeroElegido === 1) {
      alert("Excelente eleción");
      const resultado = cambioDivisa(equipo1.precio, usa);
      alert("El precio en pesos es  $" + resultado);
      alert("Gracias por su visita");
      break;
    } else if (numeroElegido === 2) {
      alert("Excelente eleción");
      const resultado = cambioDivisa(equipo2.precio, usa);
      alert("El precio en pesos es  $" + resultado);
      alert("Gracias por su visita");
      break;
    } else if (numeroElegido === 3) {
      alert("Excelente eleción");
      const resultado = cambioDivisa(equipo3.precio, usa);
      alert("El precio en pesos es  $" + resultado);
      alert("Gracias por su visita");
      break;
    } else if (numeroElegido === 4) {
      alert("Excelente eleción");
      const resultado = cambioDivisa(equipo4.precio, usa);
      alert("El precio en pesos es  $" + resultado);
      alert("Gracias por su visita");
      break;
    } else {
      alert("Ese no es un dato válido");
    }
  }
}

while (
  numeroElegido === 1 ||
  numeroElegido === 2 ||
  numeroElegido === 3 ||
  numeroElegido === 4
) {
  alert("Gracias por su visita");
  break;
}
