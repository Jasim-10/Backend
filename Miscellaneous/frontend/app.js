// function PersonMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`)
//         }
//     }
//     return person;
// }

// let p1 = PersonMaker("adam",25);
// let p2 = PersonMaker("bob",27);
// let p3 = PersonMaker("steve",26);
// let p4 = PersonMaker("stark",24);
// let p5 = PersonMaker("thor",28);



//constructor-- doesnot return any thing and start with capital letters
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function() {
//     console.log(`Hi i am ${this.name} and my age is ${this.age} years`)
// };

// let p1 = new Person("adam",25);
// let p2 = new Person("bob",27);
// let p3 = new Person("steve",26);
// let p4 = new Person("stark",24);
// let p5 = new Person("thor",28);



// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi i am ${this.name} and my age is ${this.age} years`);
//     }
// }
// let p1 = new Person("adam",25);
// let p2 = new Person("bob",27);
// let p3 = new Person("steve",26);
// let p4 = new Person("stark",24);
// let p5 = new Person("thor",28);

// class Student{
//     constructor(name,age,marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk() {
//         console.log(`Hi I am ${this.name} i am ${this.age} years old and i get ${this.marks}% in the exam`)
//     }
// }
// let stu1 = new Student("adam",25,88);
// let stu2 = new Student("bob",27,90);
// let stu3 = new Student("steve",26,98);
// let stu4 = new Student("stark",24,97);
// let stu5 = new Student("thor",28,90);


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age =age;
//     }
//     talk() {
//         console.log(`Hi i am ${this.name}`);
//     }
// }
// class Student extends Person{
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks = marks;
//     }
// }
// let stu1 = new Student("adam",25,88);
// let stu2 = new Student("bob",27,90);
// let stu3 = new Student("steve",26,98);
// let stu4 = new Student("stark",24,97);
// let stu5 = new Student("thor",28,90);

// class Teacher extends Person{
//     constructor(name,age,subject){
//         super(name,age);
//         this.subject = subject;
//     }
// }

// let teacher1 = new Teacher("adam",25,88);
// let teacher2 = new Teacher("bob",27,90);
// let teacher3 = new Teacher("steve",26,98);
// let teacher4 = new Teacher("stark",24,97);
// let teacher5 = new Teacher("thor",28,90);




