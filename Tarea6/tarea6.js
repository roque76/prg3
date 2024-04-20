class Node{
    constructor(info, next){
        this.info = info
        this.next = next
    }

}

class SimpleLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    addNode(nodeInfo){
        const newNode = new Node(nodeInfo,null)

        if(this.head === null){
            this.head = newNode
            this.size++
        }
        else{
            let actualNode = this.head
            while(actualNode.next){
                actualNode = actualNode.next
            }
            actualNode.next = newNode
            this.size++
        }
    }

    printList(){
        let actualNode = this.head
        let actualSize = this.size
        while(actualSize>0){
            console.log(actualNode.info)
            actualNode = actualNode.next
            actualSize--
        }
    }

    point1(value){
        let actualValue = 1

        while(actualValue<value+1){
            this.addNode(actualValue)
            actualValue++
        }
    }

    point2(){
        let output = true
        let filteredElements = []
        let actualNode = this.head
        let actualSize = this.size

        while(actualSize>0){
            if(typeof actualNode.info == "number"){
                filteredElements.push(actualNode.info)
            }
            actualNode = actualNode.next
            actualSize--
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
        let actualNode = this.head
        let actualSize = this.size
        let output = 0

        while(actualSize>0){
            if(typeof actualNode.info == "number"){
                output += actualNode.info 
            }
            actualNode = actualNode.next
            actualSize--
        }

        return output
    }

    point4(){
        let actualNode = this.head
        let actualSize = this.size
        let output = []

        while(actualSize>0){
            if(typeof actualNode.info == "number"){
                if(actualNode.info %2 == 0){
                    output.push(actualNode.info)
                }
            }
            actualNode = actualNode.next
            actualSize--
        }

        return output.reverse()
    }

    point5(){
        let actualNode = this.head
        let actualSize = this.size
        let output = []

        while(actualSize>0){
            if(typeof actualNode.info == "number"){
                if(actualNode.info %2 != 0){
                    output.push(actualNode.info)
                }
            }
            actualNode = actualNode.next
            actualSize--
        }

        return output.reverse()
    }

    point6(){
        let actualNode = this.head
        let actualSize = this.size
        let output = []

        while(actualSize>0){
            if(typeof actualNode.info == "string"){
               output.push(actualNode.info)
            }
            actualNode = actualNode.next
            actualSize--
        }

        return output.reverse()
    }

    point7(){
        let actualNode = this.head
        let actualSize = this.size

        let numbers = 0
        let arrays = 0
        let strings = 0
        let boolean = 0

        while(actualSize>0){
            if(typeof actualNode.info == "number"){
                numbers++
            }
            else if(typeof actualNode.info == "string"){
                strings++
            }
            else if(typeof actualNode.info == "boolean"){
                boolean++
            }
            else if(typeof actualNode.info == "object"){
                arrays++
            }

            actualNode = actualNode.next
            actualSize--
        }

        return "Numbers: "+ numbers +" "+ "Strings "+ strings +" "+ "Booleans: "+ boolean +" "+ "Arrays: "+ arrays
    }

    point8(nameToDelete){
        let actualNode = this.head
        let actualSize = 0

        while(actualSize<this.size){
            if(actualNode.info == nameToDelete){
               this.point9(actualSize)
            //    this.size--
               break
            }
            actualNode = actualNode.next
            actualSize++
        }
    }

    point9(pos){
        if(pos < 0 || pos > this.size){
            return null
        }

        let actualNode = this.head
        let previousNode

        if(pos === 0){
            this.head = actualNode.next
            this.size--
        }
        else{
            for(let i = 0; i<pos; i++){
                previousNode = actualNode
                actualNode = actualNode.next
            }

            previousNode.next = actualNode.next
            this.size--
        }
    }

    point10(value){
        let actualNode = this.head
        let actualSize = 0

        if(value > this.size || value > this.size){
            return "Invalid"
        }

        while(actualSize < value){
        
            actualNode = actualNode.next
            actualSize++
        }

        this.head = actualNode
    }
}

const LinkedList1 = new SimpleLinkedList()
console.log("PUNTO 1")
console.log("CASO DE PRUEBA 1")

LinkedList1.addNode(1)
LinkedList1.addNode("MIKE")
LinkedList1.addNode(3)
LinkedList1.addNode("ROST")
LinkedList1.addNode(6)
LinkedList1.addNode("LILA")
LinkedList1.addNode(7)
LinkedList1.addNode("JUAN")
LinkedList1.addNode("PIPE")

// LinkedList1.printList()
LinkedList1.point10(3)
LinkedList1.printList()
