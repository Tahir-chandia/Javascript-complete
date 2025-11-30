/*Question 1. Create a person object with properties: name, age, and city. Then
a) Log each property as: value of “name” property is “manas” using loop.
b) Add a new property called email to the person object.
c) Delete “city” property from person object.*/
/*
let person = {
    name:"sikander",
    age:22,
    city:"Dera Ghazi Khan"
}

//a) Log each property as: value of “name” property is “manas” using loop.
for(let key in person){
    console.log(`Value of ${key} is ${person[key]}`); 
}

// b) Add a new property called email to the person object.
person.email ="tk222@gmail.com"
console.log(person);

// c) Delete “city” property from person object.
delete person.city
console.log(person);
*/



//Question 2. Create a function that takes an object with firstName, middleName, lastName properties and returns the full name.

/*
let obj ={
    firstName:"Shakoor",
    middleName:"bhai",
    lastName:"jan",
}
function myObj(paramObj){
    return `${paramObj.firstName} ${paramObj.middleName} ${paramObj.lastName}`
}
console.log(myObj(obj));
*/


//Question 3. Write a function that takes object and returns the number of properties in an object

/*
let obj ={
    name:"khan",
    age:21,
    city:"peshawar",
    married:true
}
let key =Object.keys(obj)

let myFunc = (param)=>{
    let arr = param
    return arr.length ;
    
}
console.log(myFunc(key))
*/


// Question 4. Write a function that returns an array of names of users who have the role “admin”.
/*
const users = [
    {name:"Alice",role:"Admin"},
    {name:"Bob",role:"User"},
    {name:"Charlie",role:"Admin"}
]


function myFunc(param){
    let newUser =param.filter((item)=>{ return item.role ==="Admin";})
    let newArray = newUser.map((item)=>{return item.name})
    return newArray
}
console.log(myFunc(users))*/

//Qusetion 5. Write a function searchProducts(products, keyword) that returns an array of products whose name
// includes the given keyword (case-insensitive).

/*
const products = [
    {id:1,name:"iPhone 14"},
    {id:2,name:"Samsung Galaxy"},
    {id:3,name:"Google Pixel"},
]

function search(pro,searchKeyword){
let fiteredArray =pro.filter(item =>
    {return item.name.toLowerCase().includes(searchKeyword.toLowerCase());})
console.log(fiteredArray);
}
search(products,"i")

*/


// Question 6. Write a function groupByPost(comments) that returns an object grouping comments by postId:
/*
*/
const comments = [
    {postId:1,text:"Great post!"},
    {postId:2,text:"Thanks!"},
    {postId:1,text:"Very helpful"},
]

function myFunc(comments){
    let myObj = {}
    comments.forEach(obj=>{
        if(myObj.hasOwnProperty(obj.postId)){
            myObj[obj.postId].push(obj.text)
        }else{
            myObj[obj.postId] =[obj.text]
        }
    })
    console.log(myObj);
    
}

myFunc(comments)

//Question 7. Write a function buildQuery(params) that returns
/*
let params = {search:"laptop",
    page:2,
    sort:"price"
}


function myFunc(params){
    let url =""
    let {search,page,sort} = params
    for(key in params){
         url = url +`${key}=${params[key]}&`
    }
    let newUrl =url.slice(0,url.length-1)
    return newUrl
}
console.log(myFunc(params));
*/