let userContainer = document.querySelector(".userContainer")
let searchInput = document.querySelector("#searchInput")

const arr = [{
    profileUrl:"./assets/image00016.webp",
    name:"Brian Header",
    email:"brian@dimez.com"
},
{
    profileUrl:"./assets/gettyimages-1294339577-612x612.jpg",
    name:"Bay Lux",
    email:"baby@lux.com"
},{
    profileUrl:"./assets/image00016.webp",
    name:"Raul Bautista",
    email:"raul@bhau.com"
}
,{
    profileUrl:"./assets/c15d020633bd1f59d15979ae9219912c.jpg",
    name:"lucia",
    email:"lucia@caminos.com"
}
,{
    profileUrl:"./assets/c15d020633bd1f59d15979ae9219912c.jpg",
    name:"jacob",
    email:"Jacob@diaz.com"
},
{
    profileUrl:"./assets/c15d020633bd1f59d15979ae9219912c.jpg",
    name:"Rafay",
    email:"rafay@Duval.com.com"
}]

function renderedUsers(arr){
userContainer.innerHTML=""

arr.map((obj)=>{
const {profileUrl,name,email}=obj

let div = document.createElement("div")
div.className = "userDetails"

div.innerHTML =`<div class="userItem">
                <div >
                    <img src=${profileUrl} alt="">
                </div>

                <div class="userDetails">
                    <h3 class="name">${name}</h3>
                    <p class="email">${email}</p>
                </div>
            </div>
           `

           userContainer.append(div)
})}

renderedUsers(arr)
function handleSearch(obj){
let search =obj.target.value;
let fillteredUsers= arr.filter((item)=>{
    
    return (item.name.toLowerCase().includes(search.toLowerCase())
||item.email.toLowerCase().includes(search.toLowerCase()))
})
renderedUsers(fillteredUsers)}

searchInput.addEventListener("input",handleSearch)
