var employees = [];

function Employee(nm, jb, slry){
    this.name = nm;
    this.jobTitle=jb;
    this.salary=slry;
    this.status="Full Time";

    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
    };

}

function addEmployee(obj){
    employees.push(obj);
}

var bob = new Employee("Bob", "Instructor", "$200/hr");
var marcus = new Employee("Marcus", "Assistant", "$100/hr");
var nate = new Employee("Nate", "Assistant to the assistent", "$50/hr");


marcus.status = "Part Time";


bob.printEmployeeForm();
marcus.printEmployeeForm();
nate.printEmployeeForm();

addEmployee(bob);
addEmployee(marcus);
addEmployee(nate);

console.log(employees);
