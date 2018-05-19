'use strict';

var _temp = require('./temp');

console.log(_temp.a); // let a = 1
// console.log(a)
//
// var b = "varb"
// window.onload = function () {
//     console.log(b)
// }
//
// var c = 2;
// {
//     var c = 3;
// }
// console.log(c);
//
//
// let [d, e, f] = [9, 2, 3]
// console.log(d)
//
// let [foo = true] = [];
// console.log(foo); //控制台打印出true
//
//
// let [g, h = "JSPang"] = ['技术胖', undefined];
// console.log(g + h);
// //控制台显示“技术胖JSPang”
//
// let [i, j = "JSPang"] = ['技术胖', null];
// console.log(i + j); //控制台显示“技术胖null”


// let foo;
// ({foo} = {foo: 'JSPang'});
// console.log(foo); //控制台输出jspangpang;

// const [a, b, c, d, e, f] = "JSPang";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//
// function jspang(
//
// ...
// arg
// )
// {
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
//
// }
// jspang(1, 2, 3);


// let arr1 = ['www', 'jspang', 'com'];
// let arr2 = arr1;
// console.log(arr2);
// arr2.push('shengHongYu');
// console.log(arr1);


// let arr1 = ['www', 'jspang', 'com'];
// //let arr2=arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('shengHongYu');
// console.log(arr2);
// console.log(arr1);


// function jspang(first, ...arg){
//     console.log(arg.length);
// }
//
// jspang(0,1,2,3,4,5,6,7);


// function jspang(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
//
// jspang(0,1,2,3,4,5,6,7);

// let jspang = '技术胖';
// let blog = `非常高兴你能看到这篇文章，我是你的老朋友${jspang}。这节课我们学习字符串模版。`;
// document.write(blog);


// let jspang = '技术胖';
// let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
// document.write(blog);

//
// let a = 1;
// let b = 2;
// // let result = `${a + b}`;
// let result = a + b;
// document.write(result);


// let jspang = '技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.includes(jspang))
//
// blog.startsWith(jspang);
//
// blog.endsWith(jspang);
//
// console.log(blog.startsWith(jspang), blog.endsWith(jspang))

// document.write('jspang|'.repeat(3));


// let a = '9.18';
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));


// let json = {
//     '0': 'jspang',
//     '1': '技术胖',
//     '2': '大胖逼逼叨',
//     length: 3
// }
//
// let arr = Array.from(json);
// console.log(arr)
//
// let arr = Array.of(3, 4, 5, 6);
// console.log(arr);
//
//
// let arr2 = Array.of('技术胖', 'jspang', '大胖逼逼叨');
// console.log(arr2);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.find(function (value, index, arr) {
//     return value > 5;
// }))

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.fill('jspang', 2, 5);
// console.log(arr);


// let arr = ['jspang', '技术胖', '大胖逼逼叨']
//
// for (let item of arr.keys()) {
//     console.log(item)
// }

//
// function add(a, b = 1) {
//     if (a == 0) {
//         throw new Error('This is error')
//     }
//     return a + b;
// }
//
// console.log(add.length);


// var add = (a, b = 2) => a+b;

// console.log(add(1));

//
// var add = (a, b = 1) => {
//     console.log('message')
//     return a+b
// }
//
// console.log(add(3))


// let arr = ['jspang','技术胖','免费教程'];
// function fun(a,b,c){
//     console.log(a,b,c);
// }
//
// fun(...arr);
// console.log('a' in arr)

//
// let obj = {
//     a: 'jspang',
//     b: '技术胖'
// }
// console.log('a' in obj);  //true

// let arr = [, , , , ,];
// console.log(arr.length)
// console.log(0 in arr); //false
//
// let arr1 = ['jspang', '技术胖'];
// console.log(0 in arr1);  // true


// let arr = ['jspang', '技术胖', '前端教程'];
//
// arr.forEach((val, index) => console.log(index, val)
// )
// ;

// let arr=['jspang','技术胖','前端教程'];
//
// arr.filter(x=>console.log(x));


// let arr=['jspang','技术胖','前端教程'];
//
// arr.some(x=>console.log(x));


// let arr=['jspang','技术胖','前端教程'];
//
// console.log(arr.map(x=>'web'));
// console.log(arr)


// let arr=['jspang','技术胖','前端教程'];
//
// console.log(arr.join('|'));
//
// console.log(arr)

//
// let arr=['jspang','技术胖','前端教程'];
//
// console.log(arr.toString());

//
// let name = "jspang";
// let skill = 'web';
// var obj = {name, skill};
// console.log(obj);  //Object {name: "jspang", skill: "web"}

// let key='skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj.skill);

// var obj={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));  //3


// var obj1 = {name:'jspang'};
// var obj2 = {name:'jspang'};
// console.log(obj1.name === obj2.name);//true
//
//
// var obj1 = {name:'jspang'};
// var obj2 = {name:'jspang'};
// console.log(obj1.name === obj2.name);//true
// console.log(Object.is(obj1.name,obj2.name)); //true


// console.log(+0 === -0);  //true
// console.log(NaN === NaN ); //false
// console.log(Object.is(+0,-0)); //false
// console.log(Object.is(NaN,NaN)); //true

//
// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object;
// var f = Symbol();
// console.log(typeof(f));


// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());


// var jspang = Symbol();
// var obj = {
//     [jspang]: '技术胖'
// }
// console.log(obj[jspang]);
// obj[jspang] = 'web';
// console.log(obj[jspang]);
//
//
//


// var obj = {name: 'jspang', skill: 'web', age: 18};
//
// for (let item in obj) {
//     console.log(obj[item]);
// }

//
// let obj = {name: 'jspang', skill: 'web'};
// let age = Symbol();
// obj[age] = 18;
// for (let item in obj) {
//     console.log(obj[item]);
// }
// console.log(obj);


//
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}

//
//
//
//
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
//
// setArr.add('前端职场');
// console.log(setArr); //Set {"jspang", "技术胖", "web", "前端职场"}
//
// setArr.delete('前端职场');
// console.log(setArr); //Set {"jspang", "技术胖", "web"}


//
// let setArr = new Set(['jspang','技术胖','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
//
// console.log(setArr.has('jspang'));//true
//
//


// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// setArr.clear();
//
// console.log(setArr);//true


// let setArr = new Set(['jspang','技术胖','web','jspang']);
// for (let item of setArr){
//     console.log(item);
// }

// let setArr = new Set(['jspang','技术胖','web','jspang']);
// for (let item of setArr){
//     console.log(item);
// }
//
// console.log(setArr.size);


// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// setArr.forEach((value) => console.log(value)
// )
// ;

// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// setArr.forEach((value) => console.log(value)
// )
// ;

// let weakObj=new WeakSet();
// let obj={a:'jspang',b:'技术胖'}
// let obj1=obj;
//
// weakObj.add(obj);
// weakObj.add(obj1);
//
// console.log(weakObj);


// let json = {
//     name:'jspang',
//     skill:'web'
// }
// console.log(json.name);
//

//
// let json = {
//     name: 'jspang',
//     skill: 'web'
// }
// console.log(json.name);
//
// var map = new Map();
// map.set(json, 'iam');
// console.log(map);
// map.set('jspang',json);
// console.log(map);
//
// console.log(map.get(json));
//
//
//
// map.delete(json);
// console.log(map)
//
//
// console.log(map.size);
// map.clear()
//
// console.log(map.has('jspang'))
//
//
// var obj = {
//     add: function (val) {
//         return val + 10;
//     },
//     name: 'I am Jspang'
//
// };
// console.log(obj.add(100));
// console.log(obj.name);
//


// var pro = new Proxy({
//     add: function (val) {
//         return val + 10;
//     },
//     name: 'I am Jspang'
// }, {
//     get: function (target, key, property) {
//         console.log('come in Get');
//         console.log(target);
//         console.log(key);
//         console.log(property);
//         return target[key];
//     },
//     set: function (target, key, value, receiver) {
//         console.log(`    setting ${key} = ${value}`);
//         return target[key] = value;
//     }
// });
//
// console.log(pro.name);
// pro.name='技术胖';
// console.log(pro.name);


// let target = function () {
//     return 'I am JSPang';
// };
// var handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
//
// var pro = new Proxy(target, handler);
//
// console.log(pro());

//
// var state=1;
//
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }
//
//
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }
//
//
// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//     if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }
//
// new Promise(step1).
//
// then(function(val, rej){
//     console.log('1111111');
//     console.log(val);
//     // console.log(rej);
//     // state = 2;
//     return new Promise(step2);
//
// }).then(function(val, rej){
//     console.log('222222');
//     console.log(val);
//     // console.log(rej);
//     return new Promise(step3);
// }).then(function(val, rej){
//     console.log('333333');
//     console.log(val);
//     // console.log(rej);
//     return val;
// });


// class coder {
//     name(val) {
//         console.log(val);
//     }
// }
//
//
// let jspang = new coder;
// jspang.name('jspang');
//
//
// class Coder {
//     name(val) {
//         console.log(val);
//         return val;
//     }
//
//     skill(val) {
//         console.log(this.name('jspang') + ':' + 'Skill:' + val);
//     }
//
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//
//     add() {
//         return this.a + this.b;
//     }
// }
//
// let jspang = new Coder(1, 2);
// console.log(jspang.add());
//
// class htmler extends Coder {
//
// }
//
// let pang = new htmler;
// pang.name('技术胖');
//
