import React from 'react';
import './Boxes.css';

function Box2() {
  const arr = []
  function Add(){
    if (document.getElementById('food').value){
  arr.push(document.getElementById('food').value)
  let txt = "";
arr.forEach(myFunction);
document.getElementById("dem").innerHTML = txt;
function myFunction(value) {
  txt += value + "<br>"; 
  document.getElementById("food").value = "";}
}}
function Delete(){
  arr.pop()
  let txt = "";
arr.forEach(myFunction);
document.getElementById("dem").innerHTML = txt;
function myFunction(value) {
  txt += value + "<br>"; 
  document.getElementById("food").value = "";
}}
function hi(){
  let txt = "";
arr.forEach(myFunction);
function myFunction(value) {
  txt += value + " ,"
}
const li = []
for (let i = 0; i < 4; i++) {
  var a = document.getElementById(`name${i+1}`).innerHTML
  li.push(a)
} 
document.getElementById("order").innerHTML = li + "are preparing " + txt
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m + ":" + s;
document.getElementById("time").innerHTML = time;
}
  
    return (
        <div>
              <div className = "div1"> <h1 className="sheadings"> Mess Menu </h1>
    <h2><label for="food">What you want to eat?</label> </h2>
  <input id = "food" className = "food" type = "text" />
  <button onClick={Add}>Add</button>
  <button onClick={Delete}>Delete</button>
<br />
<p className = "dem" id = "dem"> </p>
<button onClick={hi}>Place</button> </div> 

        </div>
    );
}
export default Box2;