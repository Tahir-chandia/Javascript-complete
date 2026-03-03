
// Q.1

/*
let arr = [1,2,3];
let copyArr = {...arr};
console.log(copyArr)
*/


// Q.2
/*
let obj = {
        name: 'manas kumar lal',
        age: 21,
    }

    let objWithCity = {
            ...obj,
            city:'bhagalpur'
        }
        
        objWithCity.streetAddress = 'road';
        
        console.log(objWithCity)
        console.log(obj);
        */


// Q.3

/*
function seperateEvenOdd(...arr) {
        let even = arr.filter((elem) => {
                return elem % 2 === 0
    })
    let odd = arr.filter((elem) => {
        return elem % 2 !== 0
    })
    return {
            even,
        odd
    }
}


let { even, odd } = seperateEvenOdd(1, 2, 3, 5, 9, 10, 11)

console.log(even)
console.log(odd)
*/

//Q.4

/*
function useState(initialValue){
    let value = initialValue;
    
    function setValue(val){
        value = val
    }
    
    function getValue(){
        return value;
    }
    
    return [getValue, setValue];
}


let [getCount, setCount] = useState(0);
console.log(getCount());
setCount(5);
console.log(getCount());
*/