// // 🔂 arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 6, 1, 1001));

// // 🔂 this keyword - no longer bound
// const user = {
//   name: "haythem",
//   cities: ["Elmourouj", "Chott Mariem", "Sokra"],

//   printPlacesLived() {
//     return this.cities.map((city) => `${this.name} has lived in ${city}`);
//   },
// };

// console.log(user.printPlacesLived());

// // 🔂 Challenge Area
const multiplier = {
  numArr: [10, 20, 30],
  multiplyBy: 2,

  multiply() {
    return this.numArr.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
