// task 1
let car = {
  name: "Lexus",
  age: 10,
  lastService: "1 month",
  create: 2008,
  needRepair: false
};
let massege = 'Need Rapeir';
if (car.lastService.length>5) {
  console.log(massege);
  car.needRepair = true;
}
else{
    car.needRepair = false;
}
console.log(car);
// task 2
let product = {
    name: 'яблоко',
    price: '10$'
}
let min = 10;
let max = 20;
if(+product.price >= min || +product.price <= max){
    console.log(product.name);
} 
else{
    console.log('товар не найден') ;
}
// task 3
let java = 'JavaScript is a good language';
let res = '';
for (let i = 0; i < java.length; i++) {
       if(java[i]==' '){
    continue;
}
 res += (java[i-1] == ' ') ? java[i].toUpperCase() : java[i];
}
console.log(res);
// task 4
function mat(arr) {
    let napp = [];
        for (let i = 0; i<arr.length; i++){
            napp.push(arr[i]);
        }
            return napp;
}
let arr = mat([1,2,3]);
let doubleArray = arr.concat(arr);

console.log(doubleArray);
// task 5
function changeCollection() {
    let arrNew =[];
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].shift();
      arrNew.push(arguments[i]);
    }
    return arrNew;
  }
  let change = (changeCollection([1, 2, 3, 4], [5, 6, 7], [8, 9]));
  console.log(change);
//   task 6
const users = [
    {
      "_id": "5d1c3860aa841704d3245513",
      "isActive": false,
      "balance": 2764.35,
      "age": 33,
      "name": "Allie Blair",
      "gender": "female",
      "company": "PHOTOBIN",
      "email": "allieblair@photobin.com",
      "phone": "+1 (951) 566-2987",
      "registered": "2018-11-30T02:29:00 -02:00"
    },
    {
      "_id": "5d1c386095ffb689687f2db9",
      "isActive": false,
      "balance": 3276.25,
      "age": 22,
      "name": "Yesenia Leblanc",
      "gender": "female",
      "company": "SKINSERVE",
      "email": "yesenialeblanc@skinserve.com",
      "phone": "+1 (947) 446-2840",
      "registered": "2015-10-31T01:10:31 -02:00"
    },
    {
      "_id": "5d1c3860e73ff2a338722e81",
      "isActive": true,
      "balance": 1868.65,
      "age": 38,
      "name": "Mamie Kramer",
      "gender": "female",
      "company": "EARBANG",
      "email": "mamiekramer@earbang.com",
      "phone": "+1 (885) 564-3305",
      "registered": "2014-06-03T09:36:40 -03:00"
    },
    {
      "_id": "5d1c386000e4f2fc62be1b1e",
      "isActive": true,
      "balance": 1003.15,
      "age": 32,
      "name": "Crawford Bryant",
      "gender": "male",
      "company": "DIGIRANG",
      "email": "crawfordbryant@digirang.com",
      "phone": "+1 (889) 408-2141",
      "registered": "2015-01-15T05:20:21 -02:00"
    },
    {
      "_id": "5d1c386008ff236a315d638b",
      "isActive": false,
      "balance": 3045.41,
      "age": 36,
      "name": "Helene Holland",
      "gender": "female",
      "company": "HYDROCOM",
      "email": "heleneholland@hydrocom.com",
      "phone": "+1 (937) 554-2040",
      "registered": "2014-09-15T08:22:59 -03:00"
    },
    {
      "_id": "5d1c3860b4c27c4d5fdb6c1f",
      "isActive": true,
      "balance": 1693.51,
      "age": 23,
      "name": "Hernandez Osborn",
      "gender": "male",
      "company": "TERRASYS",
      "email": "hernandezosborn@terrasys.com",
      "phone": "+1 (965) 595-3942",
      "registered": "2016-08-06T12:19:01 -03:00"
    }
];
function funcGetUsers(arr,a,b){
    let newAr = [];
    for(let key of arr){
            if(key[a] == b ){
                newAr.push(key);
            }
    }
    return newAr;
}
console.log(funcGetUsers(users,"gender","male"));

// task 7           
const obj = {};    /*немогу объяснить результат*/
(function(x) {
  x.b = 1;
  x = null;
})(obj);
console.log(obj);

// task 8
const price = {
    price: 10,
    discount: '15%',
     getPrice() {
        return this.price
    },
     getDiscount(){
        return this.price - (this.price * parseInt(this.discount) / 100);
    }
  };
  console.log(price.getPrice()); 
  console.log(price.getDiscount()); 
// task 9
let sizes = { width: 5, height: 10 },
 getSquare = function () { return this.width * this.height };
console.log(getSquare.call(sizes));