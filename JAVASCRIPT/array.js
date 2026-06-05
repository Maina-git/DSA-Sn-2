const age = [ 17, 18, 15, 19, 14];
console.log(age[2]);
//add elements in an array
const dailyActivities = [ "eat", "sleep"];

dailyActivities.push("run");
console.log(dailyActivities);
//unshift method adds elements  in the  beginning of  an array;

const vehicles = [
    "mercedes",
    "Audi",
    "Volvo",
    "Mustang",
    "Lexus"
];

vehicles.unshift("Subaru");

console.log(vehicles);

//  change elements in an array

const subjects = [ "Maths", "English", "Science", "CRE"];
subjects[3]= "null";

// array.splice  to remove  elements  from an array

//remove an element from index 2 only a singl  element
subjects.splice(2, 1)
console.log(subjects);

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

//remove  three items  starting  from the  second  element in the  array that is  at [1]
numbers.splice(1, 3);

console.log(numbers);

//array  and  array methods

// join two arrays
console.log(vehicles.concat(subjects));
//converts  array to string
console.log(numbers.toString());
// find  index of a  number in an array
console.log(numbers.indexOf(3))
// map method 
vehicles.forEach((item)=>{
console.log(`${item} is  a good  brand of vehicle`)
});
// find


0



























