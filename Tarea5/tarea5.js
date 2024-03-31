class Queue{
    constructor(){
        this.elements = {}
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

}



const test1 = new Queue()
test1.enqueue("Mirla")
test1.enqueue("Dante")
test1.enqueue(true)
test1.enqueue([1,2,3])
test1.point1(3)
console.log(test1.printQueue())
console.log(test1.point2())
console.log(test1.point3())
console.log(test1.printQueue())
console.log(`Final : ${test1.final}`)
console.log(`First:  ${test1.first}`)
console.log(test1.point4())
console.log(test1.point5())
console.log(test1.point6())
console.log(test1.point7())

console.log(test1.point8(3))




