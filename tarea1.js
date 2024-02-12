///
name = prompt("(Ejercisio 1)Cual es tu nombre: ")
console.log(`Bienvenido a la matrix ${name}`)
///
number1 = Number(prompt("(Ejercisio 2) Cual es el primer numero: "))
number2 = Number(prompt("Cual es el segundo numero: "))
sum = number1+number2
console.log(`El resultado de la suma es : ${sum}`)
///
number1= Number(prompt("(Ejercisio 3) Cual es el primer numero: "))
number2 = Number(prompt("Cual es el segundo numero: "))
sum = number1+number2
number3 = Number(prompt(`El resultado de la suma es ${sum} ingrese el tercer numero: `))
console.log(`El resultado de la multiplicación es: ${number3*sum}`)
///
kms = Number(prompt("(Ejercisio 4) Cuantos kilometros se recorrieron: "))
gas = Number(prompt("Cuantos litros de combustible se gastaron: "))
console.log(`El consumo por kilometro es de ${kms/gas}`)
///
tempF = Number(prompt("(Ejercisio 5) Temperatura en Farenheit: "))
console.log(`La temperatura en celsius es: ${(5/9)*(tempF-32)}`)
///
number1= Number(prompt("(Ejerciso 6) Primer numero: "))
number2= Number(prompt("Segundo numero: "))
number3= Number(prompt("Tercer numero: "))
console.log(`El promedio de los numeros es: ${(number1+number2+number3)/3}`)
///
number = Number(prompt("(Ejercisio 7) Numero para descontar: "))
console.log(`Descontando el 15% queda: ${(85*number)/100}`)
///
word1 = prompt("(Ejercisio 8) Primera palabra: ")
word2 = prompt("Segunda palabra")
console.log(`${word1} ${word2}`)
///
word = prompt("(Ejercisio 9) Ingrese un texto: ")
console.log(`La primera letra del texto es ${word[0]}`)
number = Number(prompt(`Ingrese un numero menor a ${word.length}`))
console.log(`El caracter en esa posición es: ${word[number-1]}`)
///
shows = Number(prompt("(Ejercisio 10) Cuantos shows has visto: "))
if (shows<3){
    console.log(false)
}
else{
    console.log(true)
}
///
date = parseInt(prompt("(Ejercisio 11) Fecha: "))
date = String(date)
string = "053"
console.log(`${date.substring(0,2)}/${date.substring(2,4)}/${date.substring(4,8)}`)
///
number = Number(prompt("(Ejercisio 12) Numero: "))
if (number%2==0){
    console.log(true)
}
else{
    console.log(false)
}
///
age = Number(prompt("(Ejercisio 13) Edad: "))
productsBuyed = Number(prompt("Cantidad de articulos comprados"))

if (age>=18 && productsBuyed>1){
    console.log(true)
}
else{
    console.log(false)
}
///
string = prompt("(Ejercisio 14) Ingresar texto: ")
if (string.length%2!=0){
    console.log(true)
}
else{
    console.log(false)
}
///
word1 = prompt("(Ejercisio 15) Primera palabra: ")
word2 = prompt("Segunda palabra: ")
if ( word1.length<word2.length){
    console.log(true)
}
else{
    console.log(false)
}
///
name1 = prompt("(Ejercisio 16) Primer nombre: ")
name2 = prompt("Segundo nombre: ")

if (name1[0] == name2[0] || name1[name1.length-1] == name2[name2.length-1]){
    console.log(true)
}
else{
    console.log(false)
}
///
number = Number(prompt("(Ejercisio 17) Ingresar el numero: "))
if (number<0){
    console.log(`El valor absoluto del numero es: ${number*-1}`)
}
else{
    console.log(`El valor absoluto del numero es: ${number}`)
}
///
number1 = Number(prompt("(Ejercisio 18) Primer numero: "))
number2 = Number(prompt("Segundo numero: "))

if(number1>number2){
    console.log(`El numero mayor es: ${number1}`)
}
else if(number1==number2){
    console.log("No hay un numero mayor")
}
else{
    console.log(`El numero mayor es: ${number2}`)
}
///
letter = prompt("(Ejercisio 19) Ingresar letra: ")
if(letter.length<2){
    if(letter =="a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
        console.log("Es una vocal")
    }
    else{
        console.log("No es vocal")
    }
}
else{
    console.log("Ingresar solo una letra.")
}
///
