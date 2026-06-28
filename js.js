function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b != 0) {
        return a / b;
    }
}
let var1 = "";
let var2 = "";
let op = "";

function operate(a, op, b) {
    switch (op) {
        case "+":
            return add(a, b);
            break;

        case "-":
            return substract(a, b);
            break;

        case "×":
            return multiply(a, b);
            break;

        case "÷":
            return divide(a, b);
            break;
    }
}


let ac = document.querySelectorAll(".clear");
let delet = document.querySelector(".del");
let symbols = document.querySelectorAll(".symb");
let degits = document.querySelectorAll(".degit");
let operation = document.querySelectorAll(".operations");
let input = document.querySelector(".input");
let res = document.querySelector(".equal");
const outputDiv = document.querySelector(".result");

function update(x) {
    v = x.textContent;

    if (op == "") {
        var1 = var1.concat(v);
        outputDiv.textContent = var1;
    } else {
        var2 = var2.concat(v);
        outputDiv.textContent = var1 + op + var2;
    }
}

function reset() {
    var1 = "";
    op = "";
    var2 = "";
    outputDiv.textContent = 0;
}

ac.forEach((btn) => {
    btn.addEventListener("click", reset);
});

res.addEventListener("click", () => {

    let result = operate(parseFloat(var1), op, parseFloat(var2));
    outputDiv.textContent = result;
    var1 = result;
    op = "";
    var2 = "";
});


operation.forEach((x) => {
    x.addEventListener("click", () => {

        if (op == "") {
            
            if(x.textContent=="-" && var1==""){
                var1="-";
                outputDiv.textContent = var1;
            }else{
                op = x.textContent;
                 outputDiv.textContent = outputDiv.textContent + op;
            }
        } else if(var2 != ""){ 
            let result = operate(parseFloat(var1), op, parseFloat(var2));
            op = x.textContent;
            outputDiv.textContent = result + op;
            var1 = result;
            var2 = "";
            
        }else{
            if(x.textContent == "-" && op != "+"){
                var2 = "-";
                outputDiv.textContent = var1 + op + var2;
                

            }else{
                op = x.textContent;
                outputDiv.textContent = var1 + op;
            }
            
         
        }
    });
})

symbols.forEach((x) => {
    x.addEventListener("click", () => update(x));
})

degits.forEach((x) => {
    x.addEventListener("click", () => update(x));

})


delet.addEventListener("click", () => {
        if(op == ""){
           var1 = var1.substring(0,var1.length - 1);
           outputDiv.textContent = var1;
        }else if(var2== ""){
            op = "";
             outputDiv.textContent = var1 + op;
        }else{
            var2 = var2.substring(0,var2.length - 1);
             outputDiv.textContent = var1 + op + var2;
        }
});
     