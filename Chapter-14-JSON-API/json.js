// JSON:
// JSON strict object hota h
// is me hum keys or values dono double quotes me likhte hain ""
// is me hum string,null,number,object,array ,boolean store kr sakte hain
// is me hum function,undefined store nahi kr sakte

let json = `{
    "name":"Tahir",
    "age":24,
    "isMarried":true}`



// we can convert string to json
let jsonData = JSON.parse(json)

// we can also convert json to string
let strData = JSON.stringify(json)
console.log(typeof jsonData,jsonData);
console.log(typeof strData,strData);
