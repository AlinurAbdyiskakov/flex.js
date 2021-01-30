// let user = {
//   firstName: "Elon",
//   lastName: "Musk",
//   "favourite toy": "Tesla",
//   personalDate: {
//     age: 45,

//     doesSmoke: true,
//   },
//   sayBay: function () {
//     document.write("bye")
//   }


// };
// user.sayHello = function () {
//   document.write("Hello! My name's " + this.firstName + "<br>");
// }


// user.fullName = function () {
//   document.write("My full name is " + this.firstName + " " + this.lastName + "<br>");
// }
// user.doesSmoke = function () {
//   document.write("The soking" + this.doesSmoke );
// }
// user.sayHello();
// user.doesSmoke();
// user.fullName();
for (let r = 1; r <= 9; r++) {
  for (let c = 1; c <= 9; c++) {
    document.write(c + " *" + r + "=" + (r * c) + "<td>" + "|")
  }
  document.write("<br>" + "<br>");

}
