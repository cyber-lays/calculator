    function add(a,b){
        return a+b;
    }
    function substract(a,b){
        return a-b;
    }
    function multiply(a,b){
        return a*b;
    }
    function divide(a,b){
        if(b!=0){
            return a/b;
        }
    }
let var1="";
let var2;
let op;

function operate(a,op,b){
    switch(op){
        case '+': return add(a,b);
        break;

        case '-' : return substract(a,b);
        break;

        case '*': return multiply(a,b);
        break;

        case '/': return divide(a,b);
        break;
    }

}

let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let input = document.querySelector(".input");
const outputDiv = document.querySelector(".result");

function update(x){
  v = x.textContent; 
  var1= var1.concat(v);
  outputDiv.textContent = var1;
  
}


one.addEventListener("click", () => update(one));

two.addEventListener("click", () => update(two));

three.addEventListener("click", () => update(three));

four.addEventListener("click", () => update(four));

five.addEventListener("click", () => update(five));


six.addEventListener("click", () => update(six));

seven.addEventListener("click", () => update(seven));

eight.addEventListener("click", () => update(eight));

nine.addEventListener("click", () => update(nine));

zero.addEventListener("click", () => update(zero));






