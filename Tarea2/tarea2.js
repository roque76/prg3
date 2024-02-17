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

function Ejercisio24(){
    const n = Number(prompt("(Ejercisio 24) Ingresar numero para la sumatoria"))
    let i = 1
    let output = 0
    while(i<=n){
        output = output+i
        i++
    }
    console.log(`El resultado es ${output}`)
}

function Ejercisio30(){
    const number = Number(prompt("Ingresar numero"))
    let output = []

    for(i=1; i<= number; i++){
        let divisors = []
        let result = 0
        for(let x=1; x<i; x++){
            if(i%x===0){
                divisors.push(x)
            }
        }

        for (let y=0;y<divisors.length;y++){
            result += divisors[y]
        }

        if(result==i){
            output.push(i)
        }
    }

    for(let m = 0; m<output.length; m++){
        console.log(output[m])
    }
}

function Ejercisio36(){
    let char = "*"
    console.log(`Thing: ${char.repeat(0)}`)

    for(let i=1;i<=10; i=i+2){
        console.log(i)
        document.write(char.repeat(i))
        document.write("<br>")
    }
}

function Ejercisio42(a){
    if (typeof a == "number"){
        console.log("(Ejercisio 42) passed")
    }
    else{
        console.log("(Ejercisio 42) Not passed")
    }
}

function Ejercisio48(){
    givenArray = [1,2,3,4,5,6]
    outArray = []
    for(let i=0; i<givenArray.length; i++){
        outArray.push(givenArray[i]+1)
    }
    console.log(outArray)
}

function Ejercisio54(){
    exampleArray = ["J","o","h","n","","J","a","i","m","e"]
    console.log(exampleArray.toString())
}

Ejercisio30(30)


