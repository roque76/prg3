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
    
}

