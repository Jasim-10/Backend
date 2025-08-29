// function personMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk () {
//             console.log(`Hi my name is ${this.name}`);
//         }
//     }
//     return person;
// }



//Construction - doesnot return anything & start with capital letter
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function() {
//     console.log(`Hi , my name is ${this.name} and age is ${this.age}`)
// }

// let p1 = new Person("adam ",25);
// let p2 = new Person("bob ",24);
// let p3 = new Person("cersei",22);
// let p4 = new Person("arya ",22);


// class Person {
//     constructor(name,age){
//     this.name = name;
//     this.age = age;
// }
// talk()  {
//     console.log(`Hi , my name is ${this.name} and age is ${this.age}`)
// }
// }
// let p1 = new Person("adam ",25);
// let p2 = new Person("bob ",24);
// let p3 = new Person("cersei",22);
// let p4 = new Person("arya ",22);

// class Student{
//     constructor(name,age,marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk(){
//         console.log(`Hi i am ${this.name}`)
//     }
// }

// let stu1 = new Student("adam ",25,85);
// let stu2 = new Student("bob ",24,76);







// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi I am ${this.name}`);
//     }
// }
// class Student extends Person{
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks = marks;
//     }
// }
// let stu1 = new Student("adam ",25,85);
// let stu2 = new Student("bob ",24,76);
// class Teacher extends Person{
//     constructor(name,age,subject){
//         super(name,age)
//         this.subject = subject;
//     }
// }

// let teacher1 = new Teacher("Salman",25,"DSA");
// let teacher2 = new Teacher("rani",24,"CN");



