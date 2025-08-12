import React from "react";

const Pracrtice = () => {
  //     let age : number =10
  //     let name : string="mujtaba"
  //     let enrolled: boolean=true
  //     // let
  // console.log("age=",age)
  // console.log("name = ",name)
  // console.log("enrooled =" ,enrolled)

  // let array : string[]=["banana","apple","mango","ok"]
  // let Number : number[]=[2,4,5,6,7,]

  // console.log("array",array)
  // console.log("number",Number)

  // let obj:{name:stirng,age:number}={
  //     name:"mujtaba",
  //     age:22
  // }
  // console.log(obj)

  // let array : [number]=[2,3,4,5,]
  // console.log(array)

  // let name:string= "mujtaba abid"
  // let age:number= 2177
  // let isAdmin:Boolean= true

  // console.log(`my name is ${name} and my age is ${age} and i am ${isAdmin} person`)

  // let array:number[]= [1,23,5,4,7,8,9,10]
  // console.log("array =",array)

  // let obj :{name:string,  age:number, house:string, phone:number }={
  //     name:"mujtaba abid",
  //     age:22,
  //     house:"nabi park ravi road lahore",
  //     phone: 7
  // }
  // console.log("obj ===",obj)

  interface student {
    name: string;
    age: number;
    rollNumber: number;
    grade: string;
    class: number;
    school: string;
    isEnrolled: boolean;
  }

let Student1: student={
    name:"mujtaba abid",
    age: 2177,
    grade: "A+",
    rollNumber: 21,
    class: 10,
    school: "giccl",
    isEnrolled: true

}
let Student2: student={
    name:"mujtaba abid",
    age: 2177,
    rollNumber:21,
    grade: "A+",
    class: 10,
    school: "giccl",
    isEnrolled: true

}

let students:student[]=[Student1,Student2]
console.log( students)


  return <div></div>;
};

export default Pracrtice;
