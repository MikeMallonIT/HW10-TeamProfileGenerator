// Require manager class
const Manager = require("../lib/Manager");

// Test data
const name = "Mike";
const id = "123";
const email = "mallon127@gmail.com";
const office = "123456";

// Verify office number matches
test("Test Manager Office Number", () => {

    const newManager = new Manager(name, id, email, office);
    expect(newManager.officeNumber).toBe(office);
   
    console.log("PASS: Manager Office Number");
});

// Test getRole function in Manager class
test("Test Manager Role", () => {

    const newManager = new Manager(name, id, email, office);
    expect(newManager.getRole()).toBe("Manager");
   
    console.log("PASS: Manager Role");
});