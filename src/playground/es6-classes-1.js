// CLASSES

class Person {
  // Constructor
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  // Methods
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// Creating a Sub-class (INHERITANCE)
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  // overiding a parent method
  getDescription() {
    let description = super.getDescription();

    return this.hasMajor()
      ? `${description} Has a major in ${this.major}`
      : `${description} Dosn't have a major.`;
  }
}

// Traveler -> Person
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let oldGreeting = super.getGreeting();

    return this.homeLocation
      ? `${oldGreeting} I am visiting from ${this.homeLocation}.`
      : `${oldGreeting}`;
  }
}

// Testing & Logging

//                                                                 ** Person **
// const me = new Person("Haythem Ben Drissia", 32);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());

//                                                                ** Student **
// const student1 = new Student("Haythem", 32, "Computer Science");
// console.log(student1.hasMajor());
// console.log(student1.getDescription());

// const student2 = new Student();
// console.log(student2.hasMajor());
// console.log(student2.getDescription());

//                                                              ** Traveler **
const traveler1 = new Traveler(undefined, undefined, "Elmourouj");
console.log(traveler1.getGreeting());
const traveler2 = new Traveler("Msh Mostfa", 66);
console.log(traveler2.getGreeting());
