// SCOPE CHAIN
// console.log("SCOPE CHAIN");

// var aa = 10;

// function a() {
//     function b() {
//         function c() {
//             console.log(aa);
//         }
//         c();
//     }
//     b();
// }

// a();

// CLOSURES
// console.log("CLOSURES");

// function a() {
//     var b = 10;
//     function c() {
//         console.log(b);
//     }
//     return c;
// }

// // var x = a();
// console.log(a());


// function a() {
//     var x = 10;
//     function b() {
//         var y = 20;
//         function c() {
//             console.log(x, y);
//         }
//         c();
//     }
//     b();
// }

// a();


// function a(){
//     var y = 10;
    
//     function b(){
//         console.log(y);
//     }

//     return b;

// }

// var x = a();
// x();

// console.log('----------------------------------------------------');

// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();





// undefined and not defined
// console.log(a);
// console.log(x);
// var a = 10;




// var a = 10;
// var a = 20;
// // let and const 
// let b = 20;
// const c = 30;
// a = 20;
// b = 30;
// console.log(a);
// console.log(b);
// console.log(c);




// let and const are block scoped
// var is global scoped

// var a = 10;
// let b = 20;
// const c = 30;

// {
//   let d = 20;
//   const e = 30;
//   var j = 40;
//   {
//     let f = 40;
//     const g = 50;
//     {
//       let h = 60;
//       const i = 70;
//     }
//   }
// }
// console.log(d);
// console.log(j);


// function j() {
//   let k = 60;
//   console.log(a, k);

// }

// {
//   var a = 10;
// }
// console.log(a);

// function p(){
//   // console.log(l);
//   let l = 70;
//   var m = 80;
//   console.log(a, l, m);
//   function b() {
//     function h() {
//       let i = 40;
//       console.log(i);
//     }
//     h();
//     function e() {
//       const f = 40;
//       let g = 50;
//       console.log(a, f, g);
//     }
//     e();
//   }
//   b();
// }
// p();






// Shadowing

// var a = 10;
// let b = 20;
// const c = 30;

// function e() {
//   var a = 100;
//   let b = 50;
//   const c = 40;
//     console.log(a, b, c);
//     function d() {
//         let b = 20;
//         const c = 30;
//         console.log(a, b, c);
//     }
//     d();
// }
// e();

// console.log(a);
// console.log(b);
// console.log(c);



var a = 10;
let b = 20;
const c = 30;

{
  var a = 100;
  let b = 50;
}