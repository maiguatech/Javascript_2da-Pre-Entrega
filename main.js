//CHRISTIAN MAIGUA
// <----REGISTRO DE USUARIOS---->

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

//FUNCION COMPROBADORA DE USUARIO REGISTRADO

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

//<---- SE CREA UNA CLASE CON UN OBJETO Y METODOS PARA LOS DIFERENTES AIRES---->
class Equipo {
  constructor(numero, rodMarca, rodNumero, reel, linea, precio) {
    this.numero = numero;
    this.rodMarca = rodMarca;
    this.rodNumero = rodNumero;
    this.reel = reel;
    this.linea = linea;
    this.precio = precio;
  }
  //<---METODO PARA CAMBIOS DE PRECIO LOS EQUIPOS SE INSTANCIAN CON PRECIO "0" DESPUES SE COLOCA EL PRECIO--->
  cambioDePrecio(precio) {
    if (typeof precio == "number") {
      this.precio = precio;
    }
  }
  //ESTE METODO ES PARA PODER MOSTRARLO POR PROMPT  CASO CONTRARIO MUESTRA [OBJET OBJET]
  toString() {
    return `Equipo N° ${this.numero}\n
    Caña marca ${this.rodMarca}\n 
    Caña ${this.rodNumero}\n 
    Reel marca ${this.reel}\n
    Línea marca ${this.linea}\n
    Precio del equipo U$ ${this.precio}`;
  }
}

/* DESDE ACA SE CREAN LOS DISTINTOS EQUIPOS CON SUS DATOS 
LOS PRECIOS ESTAN EN CERO SE PODRAN CARGAR DESDE EL PROGRAMA O PROBABLEMENTE DESDE UN BACKEND */

let equipo1 = new Equipo(1, "Sage", "#5", "Ross", "Cortland 444", 0);
let equipo2 = new Equipo(
  2,
  "Orvis",
  "#7",
  "Orvis Cahil",
  "Orvis Clearwater",
  0
);
let equipo3 = new Equipo(
  3,
  "Gloomis",
  "#4",
  "STH MR Pop",
  "Scientific Anglers",
  0
);
let equipo4 = new Equipo(4, "Winston", "#6", "Ross", "Rio", 0);

// <----DESDE ACA SE MODIFICAN LOS PRECIOS QUE ESTÁN EN DOLARES---->

equipo1.cambioDePrecio(900);
equipo2.cambioDePrecio(995);
equipo3.cambioDePrecio(1035);
equipo4.cambioDePrecio(890);

// <---COMUNICACION CON EL USUARIO--->

alert(equipo1);
alert(equipo2);
alert(equipo3);
alert(equipo4);

// <---SE INVITA AL USUARIO A SELECCIONAR UN EQUIPO--->
let numeroElegido = Number(prompt("Seleccioná un N° de equipo"));

// DOLAR VALOR DEL DIA.
let usa = 375;

/* ESTA FUNCION ES PARA CALCULAR EL PRECIO QUE ESTÁ EN DOLARES Y PASARLO A PESOS */

const cambioDivisa = (precio, usa) => {
  const calcular = precio * usa;
  return calcular;
};
const resultado = cambioDivisa("", usa);

/* BLOQUE DE CODIGO CONDICIONAL */

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

  /* SI EL USUARIO NO ELIGIO UNA OPCION VALIDA, ENTRA EN UN BUCLE HASTA QUE ELIJA */
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
/* EN CASO DE QUE EL USUARIO HUBIERA SELECCIONADO UN EQUIPO */
while (
  numeroElegido === 1 ||
  numeroElegido === 2 ||
  numeroElegido === 3 ||
  numeroElegido === 4
) {
  alert("Gracias por su visita");
  break;
}
