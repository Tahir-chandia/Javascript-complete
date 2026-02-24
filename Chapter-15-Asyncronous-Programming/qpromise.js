// Why Do We Get a Promise Instead of Data? 
// because api call is asyncronous 

async function fetchData(){
    let response =await fetch('https://jsonplaceholder.typicode.com/users')
    let data =await response.json();
    console.log(data);
}
fetchData()