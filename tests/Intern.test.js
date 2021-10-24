// Require the Intern class
const Intern = require("../lib/Intern");

// Test data
const name = "Mike";
const id = "123";
const email = "mallon127@gmail.com";
const school = "Illinois State University";

// Test getSchool function in Intern class
test("Test Intern School", () => {

    const newIntern = new Intern(name, id, email, school);
    expect(newIntern.getSchool()).toBe(school);
   
    console.log("PASS: Intern School");
});

// Test getRole function in intern class
test("Test Intern Role", () => {

    const newIntern = new Intern(name, id, email, school);
    expect(newIntern.getRole()).toBe("Intern");
   
    console.log("PASS: Intern Role");
});