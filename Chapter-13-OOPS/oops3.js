// Inheritance:
// ❑ Inheritance is an OOP concept where one class (child) can 
// acquire properties and methods of another class (parent).




// class ElectricCar extends Car{

//     constructor(brand,color,battery){
//         super(brand, color)

//         this.battery = battery;
//     }

//     charging(){
//         console.log(`${this.brand} is charging...`)
//     }
// }

// let tesla = new ElectricCar("tesla",'black',99);
// tesla.start();
// tesla.stop();
// tesla.charging();

// console.log(tesla)


//Polymorphism:


// ❑ Poly = many, morph = forms, Polymorphism = many forms
// ❑ It allows different classes to define methods with the same name but 
// different behavior. (or we can say that has more than one form)


// class MediaPlayer{
//     play(){
//         console.log('Play media');
//     }
// }

// class Music extends MediaPlayer{
//     play(){
//         console.log('Play music')
//     }
// }

// class Video extends MediaPlayer{
//     play(){
//         console.log('play video')
//     }
// }

// let o1 = new Music();
// o1.play();
// let o2 = new Video();
// o2.play();
// let o3 = new MediaPlayer();
// o3.play();
