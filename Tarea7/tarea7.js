class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.head = null
    }

    isEmpty(){
        return this.head === null
    }

    addNode(value){
        if(this.isEmpty()){
            this.head = new Node(value)
            return
        }
        else{
            var auxNode = this.head

            while(auxNode){
                if(value<auxNode.value){
                    if(auxNode.left){
                        auxNode = auxNode.left
                    }
                    else{
                        auxNode.left = new Node(value)
                        return
                    }
                }
                else{
                    if(auxNode.right){
                        auxNode = auxNode.right
                    }
                    else{
                        auxNode.right = new Node(value)
                        return
                    }
                }
            }
        }

    }

    preOrder(auxNode, output = []){
        output.push(auxNode.value);
        if (auxNode.left) {
        this.preOrder(auxNode.left, output);
        } 

        if (auxNode.right) {
        this.preOrder(auxNode.right, output);
        }
        return output;
    }

    postOrder(auxNode, output = []){
        if(!auxNode){
            return
        }
        this.postOrder(auxNode.left, output)
        this.postOrder(auxNode.right, output)

        output.push(auxNode.value)
        return output
    }

    createTreeFromArray6(data){
        for(let i = 0; i<data.length; i++){
            this.addNode(data[i])
        }
    }

    point3(){
        while(true){
            const value = prompt("Ingresar numero ó digitar 'A' para terminar: ")

            if(value == "A"){
                break
            }
            this.addNode(value)
        }
    }

    maxValue4(){
        let level = 0
        let auxNode = this.head

        while(auxNode){
            if(auxNode.right){
            auxNode = auxNode.right
            level++
            }
            else{
                break
            }
        }

        return `Level: ${level}, Value: ${auxNode.value}`
    }

    minValue5(){
        let level = 0
        let auxNode = this.head

        while(auxNode){
            if(auxNode.left){
            auxNode = auxNode.left
            level++
            }
            else{
                break
            }
        }

        return `Level: ${level}, Value: ${auxNode.value}`
    }

}

test1 = new BinaryTree()
test1.createTreeFromArray6([10,5,7,3,2,8,9,11,12,1])
console.log(test1.maxValue4())
console.log(test1.minValue5())
console.log(test1.preOrder(test1.head))
console.log(test1.postOrder(test1.head))

test2 = new BinaryTree()
test2.createTreeFromArray6([7,4,8,9,10,3,0,2,1])
console.log(test2.preOrder(test2.head))

