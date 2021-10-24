// Require the employee class
const Employee = require("../lib/Employee");

// Test data
const name = "Mike";
const id = "123";
const email = "mallon127@gmail.com";

// Test getName function in Employee class
test("Test Employee name", () => {

    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
   
    console.log("PASS: Employee Name");
});

// Test getId function in Employee class
test("Test Employee ID", () => {

    const newEmployee = new Employee(name, id);
    expect(newEmployee.getId()).toBe(id);
   
    console.log("PASS: Employee ID");
});

// Test getEmail function in Employee class
test("Test Employee email", () => {

    const newEmployee = new Employee(name, id, email);
    expect(newEmployee.getEmail()).toBe(email);
   
    console.log("PASS: Employee Email");
});