    // 2. Create a simple form and display the submitted details on the webpage. Ensure
    // that if any field is left empty, the form should not be submitted.



    let form = document.querySelector("form")
    let nameInput = document.querySelector("#name")
    let emailInput = document.querySelector("#email")
    let submitBtn = document.querySelector("button")
    let body = document.querySelector("body")

    form.addEventListener("submit",(e)=>{
        e.preventDefault()
       
if(nameInput || emailInput){
  
    
    let div = document.createElement("div")
    div.innerHTML = `${nameInput.value} ${emailInput.value}`
    body.append(div)
}   
}
)