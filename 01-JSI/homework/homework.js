// En estas primeras 6 preguntas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Elias';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 21;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando se te pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y){
  return ("true");
}
  return ("false");
sonIguales(4, "4")
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return (str1.length===str2.length);
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){
    return("true");
  }
  return("false");
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2!==0){
    return ("true");
  }
  return("false");
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // Ojo: No es raiz cuadrada!
  // Tu código:
  return(Math.pow(num,2));

}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return(Math.pow(num,exponent));

}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero==0){
    return(false);
  }
  if(numero>0){
    return ("Es positivo");
  }
  return("Es negativo");
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return(nombre +" "+apellido);
}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  // Tu código:
  return(lado*4);
}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  // Tu código:
  return(euro*1.2);
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Tu código:
  let vocal=["a","e","i","o","u","A","E","I","O","U",];
  let laLetra= letra;
  if (letra.length>1){
    return("Dato Incorrecto");
  }
  if (vocal.includes(laLetra)){
    return ("Es vocal");
  }
  return("Dato Incorrecto");
}

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (Number.isInteger(x)&&Number.isInteger(y)){
  return (Math.max(x,y));
  }
  return("Sólo números enteros");
}

/*
Para implementar la siguiente función vamos a utilizar una estructura de control de flujo nueva, 
llamada switch, si no estás familiarizado con esta estructura, es un buen escenario para hacerle 
una visita al mejor amigo del programador, INTERNET! 
En la carrera del desarrollador constantemente es necesario recurrir a los recursos que nos 
proporciona la web (Google, YouTube, MDN, Stack Overflow, y muchos más) en búsqueda de las 
herramientas necesarias para resolver los distintos problemas que nos enfrentamos, por lo que 
aprender a realizar estas búsquedas en internet es uno de los skill más importantes que puedes 
adquirir!
En tu buscador basta con simplemente escribir "switch Javascript" y listo. Éxitos!
*/
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  // Tu código:
  const ColorSelect=color;
  const ThisIsColor = {
    "blue":"This is blue",
    "red":"This is red",
    "green":"This is green",
    "orange":"This is orange",
  };
  const ThisIsColorDefault ={
    default:"Color not found"
  }
  const TheColorIs= ThisIsColor[ColorSelect] || ThisIsColorDefault
  return(TheColorIs)
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero==10 || numero==5){
    return("true");
  }
  return("false");
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero<50&&numero>20){
    return("true");
  }
  return("false")
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
  if (numero==0||numero==1||numero==4) return false;
    for (let x=2; x<numero/2; x++){
      if (numero%x===0) return ("falso");
    }
    return ("true");
  }

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Pueden usar un while o un bucle do ... while (Investigarlo si quieren hacerlo de la segunda forma)
  // Tu código:
  let five = 0;
  let total = "";
  
  do {
    five=five+5;
    total=numero+five;
  }
  while (five<40);
  return (total);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  resta,
  esImpar,
  elevarAlCuadrado,
  elevar,
  esPositivo,
  combinarNombres,
  retornarPerimetro,
  deEuroAdolar,
  esVocal,
  obtenerMayor,
  colors,
  esDiezOCinco,
  estaEnRango,
  esPrimo,
  doWhile
};
