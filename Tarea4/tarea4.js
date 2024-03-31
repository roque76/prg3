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

stackObject.point10(5)
stackObject.showElements()