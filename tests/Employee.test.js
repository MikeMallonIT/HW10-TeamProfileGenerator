const Employee = require("../lib/Employee");


const name = "Mike";
const id = "123";
const email = "mallon127@gmail.com";

test("Test Employee name", () => {

    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
   
    console.log("PASS: Employee Name");
});

test("Test Employee ID", () => {

    const newEmployee = new Employee(name, id);
    expect(newEmployee.getId()).toBe(id);
   
    console.log("PASS: Employee ID");
});

test("Test Employee email", () => {

    const newEmployee = new Employee(name, id, email);
    expect(newEmployee.getEmail()).toBe(email);
   
    console.log("PASS: Employee Email");
});