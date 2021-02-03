
let input = document.querySelector('input');
let btn = document.querySelectorAll(".butonch")


for (let i = 0; i < btn.length; i++) {
    switch(i){
        case 0:
            btn[0].value = "7";
            break;
        case 1:
            btn[1].value = "8";
            break;
        case 2:
            btn[2].value = "9";
            break;
        case 3:
            btn[3].value = "4";
            break;
        case 4:
            btn[4].value = "5";
            break;
        case 5:
            btn[5].value = "6";
            break;
        case 6:
            btn[6].value = "1";
            break;
        case 7:
            btn[7].value = "2";
            break;
        case 8:
            btn[8].value = "3";
            break;
        case 9:
            btn[9].value = "0";
            break;
        case 10:
            btn[10].value = ".";
            break;
    }
}

// Les operations
let operation = document.querySelectorAll('.operation');
let operateur = "";

for (let i = 0; i < operation.length; i++) {
    switch(i){
        case 0:
            operation[0].value = "/";
            break;
        case 1:
            operation[1].value = "*";
            break;
        case 2:
            operation[2].value = "-";
            break;
        case 3:
            operation[3].value = "+";
            break;
    };

    operation[i].addEventListener('click', function(){
        operateur = this.value;
        input.value = operateur;
        console.log(operateur)
    })
}

// Bouton Clear
let clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    input.value = "";
    value1 = "";
    value2 = "";
    operateur = "";
})

// Les valeurs
let value1;
let value2;
let egal = document.querySelector('.egal');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (){
        if (operateur == ""){
            input.value += btn[i].value;
            value1 = Number(input.value);
            console.log(value1)
        } else{
            input.value += btn[i].value;
            value2 = Number(input.value.substr(1, input.value.length));
            console.log(value2)
        }
    })
}

// Calcul
egal.addEventListener('click', function(){
    switch(operateur){
        case "+":
            value1 = parseInt(value1)
            value2 = parseInt(value2)
            input.value = value1 + value2;
            console.log(input.value)

            break;
        case "-":
            input.value = value1 - value2;
            console.log(input.value)
            break;
        case "*":
            input.value = value1 * value2;
            console.log(input.value)
            break;
        case "/":
            input.value = value1 / value2;
            console.log(input.value)
            break;
    }
    value1 = "";
    value2 = "";
    operateur = "";
})



let body = document.querySelector("body")
body.addEventListener('click', function(e){
    input.disabled = false;

})





