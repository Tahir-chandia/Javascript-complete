// print all even numbers between 0 to 100


/*
for(let i= 1;i<100;i++){
    if(i%2 ==0){
        console.log(i);
        
    }
    
}
*/


// calculate how many vowels and consonents are in a given sring using for of loop


let string = "TAhir Khan"
let countVowels = 0;
let countConsonents = 0;

for(let count of string){
    if(count ==="a"||count ==="e" ||count ==="i" ||count ==="o"||count ==="u"||count ==="A"||count ==="E"||count ==="I"||count ==="O"||count ==="U"){
        countVowels++
    }else{
        countConsonents++
    }
}

console.log(`Count Vowels in ${string} are ${countVowels}`);
console.log(`Count Consonents in ${string} are ${countConsonents}`);
