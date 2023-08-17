Array.prototype.each = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i]);
    }
}
let object = new Array('table','notebook','box','paper');
object.each((res)=>{
    console.log(res);
});


class cars{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    info() {
        console.log(`id = ${this.id}, name = ${this.name}`);
    }
}
console.log('-----');



const c = new cars(1,'toyota');
c.info();
console.log('-----');
cars.prototype.start = function(speed){
    this.info();
    console.log(`speed = ${speed}`);
}
c.start(80);

console.log('-----');

const account = {
    id:1,
    username: 'mos66',
    password: '123456',
    onstatus: false,
    info:function(){
        console.log(`id = ${this.id}, username = ${this.username}, password = ${this.password}, onstatus = ${this.onstatus}`)
    },
    login(user,pass){
        if(user === this.username && pass === this.password){
            this.onstatus = true;
            console.log(`login success`);
            console.log(`welcome ${user}`);
        }else{
            this.username = user;
            this.password = pass;
            console.log(`not mismatch username & password`);
        }
    }
}
account.info();
account.login('mos66','123456');
account.info();
console.log('-----');

function book(){
    this.name = 'notebook';
    this.content = 'javascript';
    this.open = function(){
        return 'reading content';
    }
    this.close = function(){
        return 'end reader';
    }
}
book.prototype.writing = function(){
    this.content = 'html5 + js + css';
    return 'writing success';
}
const b = new book();
console.log(`name = ${b.name}`);
console.log(b.open());
console.log(b.writing());
console.log(b.close());
console.log('-----');

//operator
personObject = {
    name: "mos",
    say: function() {return this.name;}
  };
  console.log(personObject.name === personObject["name"]); // property de-reference
  console.log(personObject.say() === personObject["say"].call(personObject)); //scope modifire
  console.log(personObject["say"].call(personObject));

  console.log('-----');

ob1 = new Object(
    {arr:["Home","About"],
    menu:"menu = ",
    console(x){console.log(this.menu + x);},
    callb(){this.arr.forEach(this.console,this);}
});
console.log(ob1);
ob1.console('Product');
ob1.callb();

console.log('-----');

obj = { 
    vals: [1, 2, 3],
    message: "The value is ",
    console(x) { console.log(this.message + x); },
    alertVals() { this.vals.forEach(this.console, this); }
  };
  
  obj.alertVals();

console.log('-----');
console.log("Prototype Based");
//Prototype Based
/*
No Classes, only Objects.
Inherit directly from other object.
Every object has a link to prototype object.
*/
function D(){this.x=1};
var d = new D();
D.prototype.y=2;
console.log(`fun D -> instant by y = ${d.y}`); // 2

D.prototype.x = 3;
console.log(`fun D -> instant by x = ${d.x}`); // 1

function E(){this.x=1};
var e1 = new E();
var e2 = new E();

E.prototype.y = 2;
console.log(`fun E -> instant by e1-y = ${e1.y} | fun E -> instanat by e2-y = ${e2.y}`); // 2,2

e1.y = 3;
console.log(`fun E -> instant by e1-y = ${e1.y} | fun E -> instanat by e2-y = ${e2.y}`); // 3,2

console.log('-----');
//Prototype
/*
.__proto__
.prototype
*/
console.log("Prototype");

F = function(v){this.v = v;};
F.prototype == F.__proto__
F.__proto == Function.prototype

f = new F(1);
console.log(F.prototype,f.prototype,Object.getPrototypeOf(f));
console.log(`F instant (prototype) = ${F.prototype}`);
console.log(`f instant (prototype) = ${f.prototype}`);
console.log(`getPrototype f = ${Object.getPrototypeOf(f)}`);
console.log(f.__proto__);

//Instanceof and prototype
console.log(f instanceof F); // true

f.__proto__ = {};
console.log(f instanceof F); //false

String.prototype.hello = function(){
    this.stringUpper = this.toUpperCase();
    console.log(`Hello = ${this.stringUpper}`);
}
String.__proto__.Ticha = function(){
    return console.log(this);
}

console.log('-----');

// prototype variable decoration
function phone(){
    this.id = '2020G00001';
    this.model = 'iPhoneSE';
    this.brand = 'Apple';
}
phone.prototype = {
    color: 'blue',
    year: 2020
}

const p = new phone();
console.log(p.model);
console.log(p.year);

console.log('model' in p);
console.log('year' in p);

console.log(p.hasOwnProperty('model'));
console.log(p.hasOwnProperty('year'));

const calculator = {
    value1: 254,
    value2: 222
}
const calculator2 = {}
calculator2.__proto__ = calculator;
console.log(calculator.value1);
calculator2.value1 = 8500;
console.log(calculator2.value1);
console.log(calculator.value1);

