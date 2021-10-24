const Engineer = require("../lib/Engineer");


const name = "Mike";
const id = "123";
const email = "mallon127@gmail.com";
const gitHub = "mikemallonIT";


test("Test Engineer GitHub", () => {

    const newEngineer = new Engineer(name, id, email, gitHub);
    expect(newEngineer.getGithub()).toBe(gitHub);
   
    console.log("PASS: Engineer GitHub");
});

test("Test Engineer Role", () => {

    const newEngineer = new Engineer(name, id, email, gitHub);
    expect(newEngineer.getRole()).toBe("Engineer");
       
    console.log("PASS: Engineer Role");
});