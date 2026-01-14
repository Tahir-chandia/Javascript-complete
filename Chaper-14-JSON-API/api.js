// API

// ❑ API stands for Application Programming Interface.
// ❑ Application Programming Interface, is a set of rules and protocols that allows different 
// software applications to communicate and interact with each other.

//we can only call api in async function


async function apiDate(){
    let fetchData = await fetch('https://fakestoreapi.com/products')
    let data =await fetchData.json();
    console.log(data[2].category);
}

apiDate()