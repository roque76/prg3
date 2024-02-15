/// Ejercisio 1
function Ejercisio1 (){
    number1 = Number(prompt("(Ejercisio 1) Ingresar primer numero: "))
    number2 = Number(prompt("Ingresar segundo numero: "))
    alert(`El resultado de la operación de suma es ${number1+number2}`)
}

function Ejercisio6(){
    number = Number(prompt("(Ejercisio 6) Ingresar numero :"))
    if(number%5==0){
        console.log("El numero es divisible entre 5")
    }
    else{
        console.log("El numero no es divisible entre 5")
    }
}

function Ejercisio12(){
    string = prompt("(Ejercisio 12) Ingrese frase:")
    first = string[0]
    if(first.toUpperCase() == first && first.toLowerCase() != first){
        console.log("La frase empieza con una mayuscula")
    }
    else{
        console.log("La frase no empieza con mayuscula")
    }
}

function Ejercisio18(){
    n = Number(prompt("(Ejercisio 18) Ingresar cantidad de veces a iterar"))
    for(i =1 ; i<= n; i++){
        console.log(i)
    }
}

Ejercisio18()

