class Persona {
    constructor(nombre,edad,cedula){
        this.nombre = nombre
        this.edad = edad
        this.cedula = cedula
    }

    displayData(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Cedula: ${this.cedula}.`
    }

    isAboveAge(){
        if(this.edad>18){
            return true
        }
        else{
            return false
        }
    }

}
const persona1 = new Persona("John",19,1056122169)

// console.log(persona1.displayData())
// console.log(persona1.isAboveAge())

class Cuenta {
    constructor(name,cantidad=0){
        this.name = name
        this.cantidad = 0
    }

    displayData(){
        return `Nombre: ${this.name}, Cantidad: ${this.cantidad}`
    }

    ingresarFondos(fondos){
        if (fondos>0){
            this.cantidad += fondos
        }
    }

    retirarFondos(retirar){
        this.cantidad-=retirar
    }
}

const cuenta1 = new Cuenta("John")

// console.log(cuenta1.displayData())
// cuenta1.ingresarFondos(100)
// console.log(cuenta1.displayData())
// cuenta1.ingresarFondos(-1)
// console.log(cuenta1.displayData())
// cuenta1.retirarFondos(200)
// console.log(cuenta1.displayData())

class Formulas {
    sumar(a,b){
        return `${a+b}`
    }

    primeNumbers(target){
        let primos=[]
        for(let i=1; i<=target; i++){
            if(this.isPrimeNumber(i) === true){
                primos.push(i)
            }
        }
        return primos
    }

    isPrimeNumber(number){
        let output = true
        for(let i=1; i<number; i++){
            if(i!=1){
                if(number%i==0){
                    output = false
                    break
                }
            }
        }
        return output
    }
}

const test1 = new Formulas()
// console.log(test1.primeNumbers(17))


class Persona4 {
    constructor(name,edad,DNI,sexo,peso,altura){
        this.name = name
        this.edad = edad
        this.dni = DNI
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }

    idealWeight(){
        let imc = this.peso/((this.altura)^2)
        
        if (imc<20){
            return -1
        }
        else if (imc>25){
            return 1
        }
        else{
            return 0
        }
    }

    isAboveAge(){
        if(this.edad>18){
            return false
        }
        else{
            return true
        }
    }

    checkSex(){
        if(this.sexo!="M" && this.sexo!="M"){
            this.sexo = "H"
        }
    }
}

const test2 = new Persona4("John","18","1056122169","H",70,1.69)
// console.log(test2.idealWeight())

class Password{
    constructor(password,length){
        this.password = password
        this.length = length
    }

    isStrong(){
        let output = false
        if(this.length<10){
            return output
        }

        const passList = this.password.split("")

        let upperCase = 0
        let undderCase = 0
        let numbers = 0

        for(let i = 0; i<=passList.length;i++){
            if(undderCase<2){
                if(passList[i]==passList[i].toLowerCase()){
                    undderCase++
                }
            }
            else if(upperCase<3){
                if(passList[i]==passList[i].toUpperCase()){
                    upperCase++
                }
            }
            else if (numbers<6){
                let target = parseFloat(passList[i])
                if(!isNaN(target)==true){
                    numbers++
                }
            }
            else{
                output = true
                break
            }


        }
        return output
    }

    securityPassword(){
        if(this.length<=6){
            return "Weak"
        }
        else if(this.length<=10){
            return "Medium"
        }
        else{
            return "Strong"
        }
    }
}

const test3 = new Password("StronGPassWord123456",20)
// console.log(test3.isStrong())

class Counter{
    constructor(value){
        this.value = value
        this.lastComand = ""
    }

    increment(){
        this.value++
        this.lastComand = "increment"
    }

    decrement(){
        this.value--
        this.lastComand = "decrement"
    }

    reset(){
        this.value=0
        this.lastComand = "reset"
    }

    actualValue(value = this.value){
        if(value != this.value){
            this.value = value
            this.lastComand = "update"
        }
        return this.value
    }
    lastMessage(){
        return this.lastComand
    }
}

// const test4 = new Counter(0)
// test4.actualValue(10)
// test4.increment()
// test4.increment()
// test4.decrement()
// test4.increment()
// console.log(test4.actualValue())
// console.log(test4.lastMessage())

class Chimuela{
    constructor(){
        this.energy = 0
    }

    eat(grams){
        this.energy += grams*4
    }
    fly(kms){
        this.energy -= 10
        this.energy -= kms
    }

    isWeak(){
        if(this.energy<50){
            return "Weak"
        }
    }

    isStrong(){
        if(this.energy>500 && this.energy<1000){
            return "Happy"
        }
    }

    howMuchKmToFly(){
        let output = this.energy/5

        if(this.energy>300 && this.energy<=400){
            output+=10
        }
        if (this.energy%20==0){
            output+=15
        }

        return output
    }

    displayEnergy(){
        return this.energy
    }
}

// const test5 = new Chimuela()
// test5.eat(85)
// console.log(test5.displayEnergy())
// console.log(test5.howMuchKmToFly())

class Calculator{
    cargar(firstValue){
        this.value = firstValue
    }

    sumar(number){
        this.value+=number
    }

    restar(number){
        this.value-=number
    }

    multiplicar(number){
        this.value*=number
    }
    
    actualValue(){
        return this.value
    }
}

// const test6 = new Calculator()
// test6.cargar(0)
// test6.sumar(4)
// test6.multiplicar(5)
// test6.restar(8)
// test6.multiplicar(2)
// console.log(test6.actualValue())

class Libro{
    constructor(title,autor,stock,borrowedStock){
        this.title = title
        this.autor = autor
        this.stock = stock
        this.borrowedStock = borrowedStock
    }

    borrow(quantity){
        if(quantity>this.stock){
            return false
        }
        else{
            this.stock-=quantity
            this.borrowedStock+=quantity
            return true
        }
    }

    returnBorrowed(quantity){
        if(quantity>this.borrowedStock){
            return false
        }
        else{
            this.stock+=quantity
            this.borrowedStock-=quantity
            return true
        }
    }

    toString(){
        return `Title: ${this.title}, Autor: ${this.autor}, Stock: ${this.stock}, BorrowedStock: ${this.borrowedStock}`
    }
}