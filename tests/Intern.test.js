const Intern = require("../lib/Intern");


const name = "Mike";
const id = "123";
const email = "mallon127@gmail.com";
const school = "Illinois State University";


test("Test Intern School", () => {

    const newIntern = new Intern(name, id, email, school);
    expect(newIntern.getSchool()).toBe(school);
   
    console.log("PASS: Intern School");
});

test("Test Intern Role", () => {

    const newIntern = new Intern(name, id, email, school);
    expect(newIntern.getRole()).toBe("Intern");
   
    console.log("PASS: Intern Role");
});