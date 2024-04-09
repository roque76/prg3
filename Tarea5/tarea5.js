class Queue{
    constructor(){
        this.elements = []
        this.first = 0
        this.final = 0
    }

    enqueue(newElement){
        this.elements[this.final] = newElement
        this.final++
    }

    dequeue(){
        if(this.first == this.final){
            return "Queue empty"
        }

        delete this.elements[this.first]
        this.first++
    }

    printQueue(){
        let output = ""
        for(let i = this.first; i < this.final; i++){
            output += this.elements[i] + " "
        }

        return output
    }

    point1(quantity){
        while(quantity>0){
            this.enqueue(quantity)

            quantity--
        }
    }

    point2(){
        let output = true
        let filteredElements = []

        for(let i = this.first; i< this.final; i++){
            if(typeof this.elements[i]== "number"){
                filteredElements.push(this.elements[i])
            }
        }

        for(let x = 0; x<filteredElements.length; x++){

            if(filteredElements[x]%2==0 && x%2==0){
                continue
            }

            else if(filteredElements[x]%2!=0 && x!= 0){
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

        for(let i = this.first; i <this.final; i++){
            if(typeof this.elements[i] == "number"){
                output += this.elements[i]
            }
        }

        return output
    }

    point4(){
        let output = []

        for(let i = this.final-1; i>=this.first; i--){
            if(this.elements[i]%2 == 0&& typeof this.elements[i] == "number"){
                output.push(this.elements[i])
            }
        }
        return `Even numbers at exit order:  ${output}`
    }

    point5(){
        let output = []

        for(let i = this.final-1; i>=this.first; i--){
            if(this.elements[i]%2!=0 && typeof this.elements[i] == "number"){
                output.push(this.elements[i])
            }
        }

        return `Uneven numbers at exit order: ${output} `
    }

    point6(){
        let output = []

        for(let i = this.final-1; i>=this.first; i--){
            if(typeof this.elements[i] == "string"){
                output.push(this.elements[i])
            }
        }

        return `Strings at exit order:  ${output}`
    }

    point7(){
        let numbers = 0
        let arrays = 0
        let strings = 0
        let boolean = 0

        for(let i = this.first; i<this.final; i++){
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

    point8(nameToDelete){
        if(this.elements.indexOf(nameToDelete) == -1){
            return "Element not found in queue"
        }
        else{
            this.elements.splice(this.elements.indexOf(nameToDelete), 1)
            this.final--
            return "Element deleted"
        }
    }

    point9(lengthToDelete){
        if(lengthToDelete>this.elements.length || lengthToDelete<1){
            return "Invalid position"
        }
        else{
            this.elements.splice(lengthToDelete-1, 1)
            this.final--
            return "Element deleted"
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
                this.final--
            }

            return "Elements deleted"
        }
    }
}



const queueObject = new Queue()

queueObject.enqueue(2)
queueObject.enqueue("Mike")
queueObject.enqueue(4)
queueObject.enqueue("Rost")
queueObject.enqueue(6)
queueObject.enqueue("Lila")
queueObject.enqueue(8)
queueObject.enqueue("Juan")
queueObject.enqueue("PIPE")
queueObject.enqueue(10)

console.log("Basic Queue")
console.log(queueObject.printQueue())

//EJERCISIO 1 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 1")
queueObject.point1(4)
console.log(queueObject.printQueue())
//EJERCISIO 2 - Caso de prueba 1
console.log(queueObject.point2())
queueObject.point10(14)
//EJERCISIO 2 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 2")
queueObject.enqueue(2)
queueObject.enqueue("Mike")
queueObject.enqueue(3)
queueObject.enqueue("Rost")
queueObject.enqueue(2)
queueObject.enqueue("Lila")
queueObject.enqueue(1)
queueObject.enqueue("Juan")
queueObject.enqueue("PIPE")
queueObject.enqueue(10)
console.log(queueObject.printQueue())
console.log(queueObject.point2())
//EJERCISIO 3 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 3")
console.log(queueObject.printQueue())
console.log(queueObject.point3())
queueObject.point10(10)
//EJERCISIO 4 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 4")
queueObject.enqueue(2)
queueObject.enqueue("Mike")
queueObject.enqueue(3)
queueObject.enqueue("Rost")
queueObject.enqueue(4)
queueObject.enqueue("Lila")
queueObject.enqueue(1)
queueObject.enqueue("Juan")
queueObject.enqueue("PIPE")
queueObject.enqueue(10)
console.log(queueObject.printQueue())
console.log(queueObject.point4())
queueObject.point10(10)
//EJERCISIO 4 - Caso de prueba 2
console.log("Caso de prueba 2 - EJERCISIO 4")
queueObject.enqueue(1)
queueObject.enqueue("Mike")
queueObject.enqueue(3)
queueObject.enqueue("Rost")
queueObject.enqueue(3)
queueObject.enqueue("Lila")
queueObject.enqueue(1)
queueObject.enqueue("Juan")
queueObject.enqueue("PIPE")
queueObject.enqueue(7)
console.log(queueObject.printQueue())
console.log(queueObject.point4())
//EJERCISIO 5 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 5")
console.log(queueObject.printQueue())
console.log(queueObject.point5())
//EJERCISIO 6 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 6")
console.log(queueObject.printQueue())
console.log(queueObject.point6())
//EJERCISIO 7 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 7")
console.log(queueObject.printQueue())
console.log(queueObject.point7())
//EJERCISIO 8 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 8")
console.log(queueObject.printQueue())
console.log(queueObject.point8("Mike"))
console.log(queueObject.printQueue())
//EJERCISIO 9 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 9")
console.log(queueObject.printQueue())
console.log(queueObject.point9(2))
console.log(queueObject.printQueue())
//EJERCISIO 10 - Caso de prueba 1
console.log("Caso de prueba 1 - EJERCISIO 10")
console.log(queueObject.printQueue())
console.log(queueObject.point10(5))
console.log(queueObject.printQueue())
