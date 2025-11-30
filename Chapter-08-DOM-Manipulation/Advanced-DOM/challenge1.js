// Challenge 1:
// Create a function that takes node and newTagName and replace the node from the new node with changed tag name in the DOM.


function changeTagName(oldNode,newNode){
    if(oldNode instanceof Element){
        let p = document.createElement(newNode)
        p.innerText = oldNode.innerText

        for (let value of oldNode.attributes){
            console.log(value.name,value.value);
            p.setAttribute(value.name,value.value);
            
        }
        oldNode.after(p)
    }else{
        console.error("Invalid Tag Name");
        
    }

}


let btn = document.querySelector("div")
changeTagName(btn,"p")

