let click_btn = document.getElementById("click_btn")

// click
// mouseover
// keyup
//scroll
// load
// submit


// click_btn.onclick =()=>{

//     let form = document.getElementById("hidden_form")
//     form.style.display = "block"


    
// }

let username = document.getElementById("username");

username.onkeyup =()=>{
let usernameInput = ""
    let output = document.getElementById("output")
    usernameInput += username.value;
    output.innerHTML = usernameInput;
}





click_btn.addEventListener("click", function(){
    let form = document.getElementById("hidden_form")
    form.style.display = "block"
    
})






// let
// var
// // const

// // Array
// let data = [ "two" , 3, "four"]
// // alert({0})
// // ARRAY METHOD
// let newData = data. push


// FUNCTIONS
// ARROW FUNCTIONS
// const minNumber =  (a, b)=>{
    // body of the function

// if (a<b) {
    // alert(a)
// } else {
    // alert(b)
// }

// const GoodMorning = (a, b)=>{
     
// prompt("What is your name"?  )
//     alert("What is your name"? any)
// }

// }

// minNumber(10,11)





// NAME FUNCTIONS
// Definition of Function
// function MaxNumber(a, b){
//     function body
//     if (a>b) {
//       alert(a)
//     } else {
//       alert(b)
//     }
//   }
  
  
  
  
//   Call Our Function
//   MaxNumber(0, 1)
  
  
//   const Surname = "samuel"; String


 
// while (Emeka Good Morning) {}
    
// alert(Emeka + GoodMorning)



// OBJECTS
// This is the physical rep of a thing.


// CLASS
// This is the blueprint for building an object


// A house is the object
// and the building plan is the class


// KEY COMPONENTS OF OOP 
// (Object Oriented Programming)
// 1. class: The blueprint for building an object
// 2. object: is an instance of a class
// 3. properties: variables and values that a class or an object will have
// 4. Methods: are function inside an object or a class 


// class definition
class House {
    
    // properties of the house class
    
    furnitures;
    television;
    kitchen_util;
    room;
    refrigerator;

    // methods are functions inside a class
    
    noisy(){
        alert("The house is noisy")
    };

    calm(){
        alert("The house is calm")
    }

}


// calling of class: basically building an object

const Duplex = new House();
// const Bungalow = new House()

// Duplex.furnitures = 5
// Bungalow.furnitures = 8

// Duplex. calm()
// //  Duplex.furnitures = 5;

// Inheritance: This is The future of classes recieving data (Objects and Properties)

 class Food {
    //    properties of the food class

    protein;
    carbonhydrate;
    vitamin;
    // name;
    // age

    // constructor (name){
    //     this.name  = name
    // this.age =age

    //     alert(`You just created a ${name} object`)
    // }

    //    methods inside the food class

      Bean(){
               alert("The food is Bean")
       };
       Rice(){
                     alert("The food is Rice")
       };
      Orange(){
               alert("The food is Orange")
       };
 }
    //  const Garri = new Food("Garri"); 

    //  Garri.Rice()



    // DOM - Document Object Model

    // This takes your page and disect into nodes / locations

     

    // List of methods to work with the DOM
    // 1. document.getElementById()
    // 2. document.getElementByClassName()
    // 3. document.getElementByTagName
    // 4. document.QuarySelector or To grab All The Elements That Are The Same
    // Eventlistener()


    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")


    // DOM Manipulation
    one.innerText = "Class & Object"
    two.innerText = "DOM & Its Manipulation"
    three.innerText = "Saturday"
    four.innerText = "Sunday"



    // one.style.border = "1px solid red";
    // one.style.width = "80%";
    // one.style.color = "green";




    const form = document.getElementById("form")
   
   form.addEventListener("submit", (e)=>{
    
    let userName = document.getElementById("field").value;
    e.preventDefault();
    alert(userName)
   })



// create a class named Student, that willl have a property of name, school, age, dept
//  let the class have a method of eat => alert( i am eating), lectures=> alert(i am in the lecture)
// when you create a new student object, let the object alert
// the person name, age and dept


// class Student{
//     properties
//       name;
//       school;
//       age;
//       dept;
    
//  constructor ( name,age,dept){
//        this.name = name
//        this.age = age
//        this.dept = dept

//          alert(`${name} is ${age} years old, And is in the ${dept} Department`)
//     }
//     method 
//       eat(){
//         alert("i am eating")
//       };
//       lectures(){
//         alert("i am in the lecture hall")
//       };
// }
//     const Obi = new Student("Wisdom", 20,"Medicial");

    // FUTO.eat()


class School{
    properties
       staff;
       location;
       student;
constructor ( staff,location,student){
       this.staff = staff
       this.location = location
       this.student = student

        alert(`${staff} is a teacher and he lives at ${location} beside a student named ${student}  `)
}
Object
  primary(){
    alert("this is a primary school")
  };
   secondary(){
     alert("this is a secondary school")
   };

}
    const MVCA = new School("MRS Peace", "Warri", "Prince")

 
let Domain = document.getElementById("Domain").innerHTML = "Domain Expansion Marnovalent Shrine";

  //DOM EVENTS


//    Domain.innerText = ("Domain Expansion Marnovalent Shrine");











