class Stack{
    constructor(){
        this.elements = []
    }
    showElements(){
        console.log(this.elements)
    }
    stack(newElement){
        this.elements.splice(0,0,newElement)
    }
    unStack(){
        this.elements.splice(0,1)
    }
    point1(numberOfElements){
        const arrayElements = Array.from({ length: numberOfElements }, (_, i) => i + 1)
        for(let i = 0; i<arrayElements.length; i++){
            this.stack(arrayElements[i])
        }        
    }
    point2(){
        let output = true
        let filteredElements = []

        for(let x = 0; x<this.elements.length; x++){
            if(typeof this.elements[x] == "number"){
                filteredElements.push(this.elements[x])
            }
        }

        for(let i = 0; i<filteredElements.length; i++){
            if(filteredElements[i]%2==0 && i%2 == 0){
                continue
            }
            else if(filteredElements[i]%2!=0 && i%2!=0){
                continue
            }
            else{
                output = false
                break
            }
        }

        return output
    }
    point3(){
        let output = 0

        for(let i = 0; i<this.elements.length; i++){
            if(typeof this.elements[i] == "number"){
                output += this.elements[i]
            }
        }
        return output
    }
    point4(){
        let output = []
        for(let i = 0; i<this.elements.length; i++){
            if(typeof this.elements[i] == "number" && this.elements[i]%2 == 0){
                output.push(this.elements[i])
            }
        }

        return output
    }
    point5(){
        let output = []
        for(let i = 0; i<this.elements.length; i++){
            if(typeof this.elements[i] == "number" && this.elements[i]%2 != 0){
                output.push(this.elements[i])
            }
        }

        return output
    }
    point6(){
        let output = []
        for(let i = 0; i<this.elements.length; i++){
            if(typeof this.elements[i] == "string"){
                output.push(this.elements[i])
            }
        }

        return output
    }
    point7(){
        let numbers = 0
        let arrays = 0
        let strings = 0
        let boolean = 0

        for(let i = 0; i<this.elements.length; i++){
            if(typeof this.elements[i] == "number"){
                numbers++
            }
            else if(typeof this.elements[i] == "string"){
                strings++
            }
            else if(typeof this.elements[i] == "boolean"){
                boolean++
            }
            else if(typeof this.elements[i] == "object"){
                arrays++
            }
        }

        return "Numbers: "+ numbers +" "+ "Strings "+ strings +" "+ "Booleans: "+ boolean +" "+ "Arrays: "+ arrays
    }
    point8(toDelete){
        if(this.elements.indexOf(toDelete) == -1){
            return "Element not found in stack"
        }
        else{
            this.elements.splice(this.elements.indexOf(toDelete), 1)
        }
    }
    point9(lengthToDelete){
        if(lengthToDelete>this.elements.length || lengthToDelete<1){
            return "Invalid position"
        }
        else{
            this.elements.splice(lengthToDelete-1, 1)
        }
    }
    point10(lengthToDelete){
        if(lengthToDelete>this.elements.length || lengthToDelete<1){
            return "Invalid position"
        }
        else{
            let i = 0
            while(i< lengthToDelete){
                this.elements.splice(0,1)
                i++
            }
        }
    }
}

const stackObject = new Stack()

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)

console.log("Antes de caso de prueba")
stackObject.showElements()
// EJERCISIO 1 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 1")
stackObject.point1(5)
stackObject.showElements()


// EJERCISIO 1 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 1")
stackObject.point10(15) // Elimina la pila

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.point1(10)

stackObject.showElements()
stackObject.point10(20)
// EJERCISIO 2 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 2")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point2())
stackObject.point10(10)
//EJERCISIO 2 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISO 2")

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(1)
stackObject.stack("Rost")
stackObject.stack(2)
stackObject.stack("Lila")
stackObject.stack(3)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point2())
stackObject.point10(10)

// EJERCISIO 3 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 3")

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point3())
stackObject.point10(10)
//EJERCISIO 3 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 3")


stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(1)
stackObject.stack("Rost")
stackObject.stack(2)
stackObject.stack("Lila")
stackObject.stack(3)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point3())
stackObject.point10(10)
// EJERCISIO 4 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 4")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point4())
stackObject.point10(10)
// EJERCISIO 4 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 4")

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(1)
stackObject.stack("Rost")
stackObject.stack(2)
stackObject.stack("Lila")
stackObject.stack(3)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point4())
stackObject.point10(10)

// EJERCISIO 5 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 5")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point5())
stackObject.point10(10)

// EJERCISIO 5 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 5")

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(1)
stackObject.stack("Rost")
stackObject.stack(2)
stackObject.stack("Lila")
stackObject.stack(3)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point5())
stackObject.point10(10)

// EJERCISIO 6 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 6")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point6())
stackObject.point10(10)

// EJERCISIO 6 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 6")

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(1)
stackObject.stack("Rost")
stackObject.stack(2)
stackObject.stack("Lila")
stackObject.stack(3)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack("Luisa")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point6())
stackObject.point10(11)

// EJERCISIO 7 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 7")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point7())
stackObject.point10(10)

// EJERCISIO 7 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 7")

stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(1)
stackObject.stack("Rost")
stackObject.stack(2)
stackObject.stack("Lila")
stackObject.stack(3)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

console.log(stackObject.point7())
stackObject.point10(10)

// EJERCISIO 8 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 8")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

stackObject.point8("Lila")
stackObject.showElements()
stackObject.point10(9)

// EJERCISIO 9 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 9")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

stackObject.point9(5)
stackObject.showElements()
stackObject.point10(9)
// EJERCISIO 9 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 9")
stackObject.stack(2)
stackObject.stack("Mike")
stackObject.stack(4)
stackObject.stack("Rost")
stackObject.stack(6)
stackObject.stack("Lila")
stackObject.stack(8)
stackObject.stack("Juan")
stackObject.stack("PIPE")
stackObject.stack(10)
stackObject.showElements()

stackObject.point9(3)
stackObject.showElements()
stackObject.point10(9)


stackObject.showElements()

console.log("La forma en la que la muestra de esta entrega funciona en base a que el punto 10 funcione, por lo que todos los puntos son casos de pruebas de este mismo")