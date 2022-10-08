var userName = "Annu"; //        Global Scope
var lastCity = "Bangalore"; //    Global Scope
let a1 = "Annu"; //              Script Scope  == Bcoz Now Its declare globally
const a2 = "Aniket"; //           Script Scope  == Bcoz Now Its declare globally
a33 = 10; //                      Acidental Variable ==  Global Scope
window.a43 = 20; //               Acidental Variable ==  Global Scope

//

{
  var name33 = "Annu"; //        Global Scope
  let ab = 10; //                Block Scope == Bcoz Now its declare inside a curley Braces
  const w22 = 200; //            Block Scope == Bcoz Now its declare inside a curley Braces
  for (let i = 0; i < 8; i++) {
    let a = 10000;
  }
}

//

function tryMe() {
  var name1 = "Aniket"; //        Local Scope == Bcoz Now its declare inside a function
  let village1 = "Aambhlikheda"; //          Local Scope == Bcoz Now its declare inside a function
  const gender = "male"; //       Local Scope == Bcoz Now its declare inside a function
  x = 10; //                      Global  Scope == Bcoz its a accidental variable
  window.y = 20; //               Global  Scope == Bcoz its a accidental variable
}

//

function addNum(a, b) {
  return a + b; //                 a,b (both are local scope)
}

addNum(10, 90);
addNum(100, 910);
addNum(160, 90);

// Function

let a = 10;
function tryMe() {
  let a = 20;
  return a;
}
tryMe();
console.log("A: ", a); //    10 == Bcoz function ki range bahi tk h.
//                                 yadi dono jagah let,var,const ho tb bhi bahar ki value dega.
//
var b = 10;
function tryMe1() {
  b = 20;
  return b;
}
tryMe1();
console.log("B: ", b); //     20 == let/var we can reassign
//
const c = 10;
function tryMe2() {
  c = 20;
  return c;
}
tryMe2();
console.log("C: ", c); //      Error == in const we can't redecalare nd reassign
//
var d = 10;
function tryMe2() {
  var d = 20;
  return d;
}
tryMe2();
console.log("D: ", d); //       Doubt by it's not reassign

//  For Loop

var q = 11;
for (var q = 0; q < 3; q++) {
  var q = 13;
}
console.log("Q :", q); //    14  loop increment
//
var q1 = 11;
for (let q1 = 0; q1 < 3; q1++) {
  q1 = 13;
}
console.log("Q1 :", q1); //      11  loop run on q  nd q1=13 === let q1=13 both r equal
//
var q2 = 19;
for (let q3 = 0; q3 < 3; q3++) {
  q2 = 13;
}
console.log("Q2 :", q2); //       13  reassin in var variable nd loop run on q3
//
let r = 11;
for (let r = 0; r < 3; r++) {
  r = 13;
}
console.log("R :", r); //    11 Block bahi tk h nd loop run on r
//
let s = 11;
for (let r = 0; r < 3; r++) {
  s = 13;
}
console.log("S :", s); //    13 reassin value nd loop run on r
//
let s1 = 11;
for (let r = 0; r < 3; r++) {
  let s1 = 13;
}
console.log("S1 :", s1); //   11 can't redeclare nd loop run on r
//
const s2 = 17;
for (let s2 = 0; s2 < 3; s2++) {
  const s2 = 13;
}
console.log("S2 :", s2); //   17 can't reassin nd redeclared nd can't run loop on const

//  Curley Braces

let t = 33;
{
  let t = 44;
}
console.log("T: ", t); //      33 can't reassin nd scope is diffrnt
//
let t1 = 33;
{
  t1 = 44;
}
console.log("T1: ", t1); //     44 reassin
//
let t2 = 33;
{
  const t2 = 44;
}
console.log("T2: ", t2); //      33
//
// let t3 = 33;
// {
//   var t3 = 44;
// }
// console.log("T3: ", t3); //     Error already declared
//
const u = 63;
{
  const u = 22;
}
console.log("U: ", u); //       63
//
const u1 = 66;
{
  let u1 = 22;
}
console.log("U1: ", u1); //    66
//
// const u2 = 61;
// {
//   u2 = 22;
// }
// console.log("U2: ", u2); //   error can't redeclare nd reassin.
//
var v = 55;
{
  var v = 57; // v = 57
}
console.log("V :", v); //      57 redeclare nd reassin.
//
var v1 = 55;
{
  const v1 = 57;
}
console.log("V1 :", v1); //   55  variable name diffrent same let k sath.

//

//  Temporal Dead Zone :

console.log(w); //   undefined.
var w = 12;
//
console.log(x); //   we can't access before initialize of it.
let x = 33;
//
console.log(y); //   we can't access before initialize of it.
const y = 44;
