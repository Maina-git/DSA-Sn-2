const Student = {
    firstName :"Francis",
    ADM:129645
}

let name = Student.firstName;

for(let i = 0; i <= name.length; i++){
    console.log(i)
}

const person = {
    name:"John",
    age:20
}

console.log(person);

// add properties

const student = {
    name:"John",
    age:20
};
student.rollNo = 14;
student.facaulty = 'Science';


console.log(student);

// delete properties 

const employee = {
    name : "Tony",
    position:"Officer",
    salary : 30000
};

delete employee.salary;

console.log(employee);


//objects methods

const friend = {
    name : "Bob",
    age:30,

// use function as a value
    greet: function () {
          console.log("Bob says Hi!");
}
};


friend.greet();















