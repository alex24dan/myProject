// конкатынация
let string = "some test string";
value = string[0].toUpperCase()+string.slice(1,string.length-1)+string[string.length-1].toUpperCase();
console.log(value);
// template string
let str = `${string[0].toUpperCase()}${string.slice(1,string.length-1)}${string[string.length-1].toUpperCase()}`;
console.log(str);
// положение string
position = string.indexOf("string");
console.log(position);
// положение 2 пробела
position2 = string.lastIndexOf(" ");
console.log(position2);
// строка с 5 по 9 символ
let slice = string.slice(5, 9);
console.log(slice);
// число пи
let pi = Math.PI;
let piFixed = pi.toFixed(2);
console.log(piFixed);
// min,max nambrs
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(min);
console.log(max);
// случайное число
let random = Math.random();
let fix = random.toFixed(2);
console.log(+fix);
// целое число
let int = Math.floor(Math.random() * 10);
console.log(int);
// приведение к норме 1
let a = 0.7 + 0.6;
let norma = parseFloat(a.toFixed(1));
console.log(norma);
// приведение к норме 2
let b = (0.7 * 10 + 0.6 * 10) / 10;
console.log(b);
// создаём объект
const list = {
  product: "iphone"
};
// добовляем новые поля в объект
list.price = "1000";
list.curence = "dollor";
list.diteils = {};
list.diteils.model = " ";
list.diteils.color = " ";
console.log(list);
