let num1= prompt("Welcome to my calculator, please choose a number:");
let op= prompt("Now please choose an operator (+,-,*,/:");
let num2= prompt("Now please choose a second number:");

num1= parseFloat(num1);
num2= parseFloat(num2);

function add(n1,n2){
    return n1+n2
}

function subtract(n1,n2){
    return n1+n2
}

function multiply(n1,n2){
    return n1+n2
}

function divide(n1,n2){
    return n1+n2
}

if (op=="+"){
    alert(`${num1} + ${num2} = ${add(num1,num2)}`)
}else if( op== "-"){
    alert(`${num1} - ${num2} = ${subtract (num1,num2)}`)
}else if(op== "*") {
    alert(`${num1} * ${num2} = ${multiply (num1,num2)}`)
}else if(op== "/") {
alert (`${num1} / ${num2} = ${divide(num1,num2)}`)
}