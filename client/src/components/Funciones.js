import DOMPurify from "dompurify";
//convertir html a texto
export const HtmlToText = (html) => {
  //desinfectamos el html
  return DOMPurify.sanitize(html);
};
// console.log(HtmlToText("<h1>hola</h1>"));

//Capitalizar texto
export const Capitalize = (str) => str[0].toUpperCase() + str.slice(1);

// console.log(Capitalize("hola como estas mi nombre es isai hernandez"));
export const CapitalizeAll = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// console.log(CapitalizeAll("hola como estas mi nombre es isai hernandez"));

//Maximo de caracteres
export const MaxWords = (text, max) => {
  if (text.length > max) {
    return text.substr(0, max) + "...";
  } else {
    return text;
  }
};
// console.log(MaxWords("hola mundo"));

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// console.log(validateEmail("isaidj1999@gmail.com"));

//what is the next number of secuence 10,37,32,145,226,
export const nextSequence = (arr) => {
  return arr.length > 0 ? Math.max(...arr) + 1 : 1;
};

// 567 equipos , si todos juegan contra todos ,calcular la cantidad de partidos
export const cantidadPartidos = (equipos) => {
  return (equipos * (equipos - 1)) / 2;
};
// console.log(cantidadPartidos(567));

//number of 4 digit is multiple of 5 and 7 and last digit is 0
//calculate the minimum number of digits
export const minDigits = (num) => {
  return num.toString().length;
};
// console.log(minDigits(1234));

export const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};

//formatear fecha 2020-09-16T21:42:01.000Z pero si numero es menor a 10 le pone un 0 antes
export const formatearFecha = (fecha) => {
  let F = new Date(fecha);
  let dia = F.getDay() < 10 ? "0" + F.getDay() : F.getDay();
  let mes = F.getMonth() < 10 ? "0" + F.getMonth() : F.getMonth();
  let anio = F.getFullYear();
  let hora = F.getHours() < 10 ? "0" + F.getHours() : F.getHours();
  let minutos = F.getMinutes() < 10 ? "0" + F.getMinutes() : F.getMinutes();
  let segundos = F.getSeconds() < 10 ? "0" + F.getSeconds() : F.getSeconds();
  return `${hora}:${minutos}:${segundos} ${dia}/${mes}/${anio}`;
};
console.log(formatearFecha("2020-09-16T21:42:01.000Z"));
