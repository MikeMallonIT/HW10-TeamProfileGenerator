// Initilize packages needed for app to work
const fs = require('fs');
var inquirer = require('inquirer');

// Require classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Main manu questions
const menu = [
    {
        type: 'list',
        message: 'Please select one of the following options:',
        name: 'questions',
        choices: ['Add a new engineer', 'Add a new intern', 'Done!'],
    }
]

// Questions about the manager
const managerQuestions = [
    
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the team manager's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?",
    }
];

// Questions about a engineer
const engineerQuestions = [
    
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What is the engineer's GitHub username?",
    }
];

// Questions about an Intern
const internQuestions = [
    
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the intern's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does the intern go to school?",
    }
];

// Main menu function
function menuOptions() {
    
    inquirer
        .prompt(menu)

        .then((data) => {
 
            switch (data.questions) {
                case "Add a new engineer":
                  engineer();
                  break;
                case "Add a new intern":
                    intern();
                  break;
                case "Done!":
                    htmlFinisher();
                  break;
                default:
                    console.log("Menu selection error")
              }
        });
}

// Manager function for collecting information about the manager. Creates new manager object and sends data to write function
function manager(){

    inquirer
        .prompt(managerQuestions)

    .then((data) => {
        // Manager constructor
        const newManager = new Manager(data.name, data.employeeId, data.email, data.office);

        // Send data to be written
        write(newManager, data.office);
        // Show main manu
        menuOptions();
    });
}

// Engineer function for collecting information about a engineer. Creates new engineer object and sends data to append function where it will be added to the HTML file
function engineer(){
    inquirer
        .prompt(engineerQuestions)

    .then((data) => {
        // Engineer constructor
        const newEngineer = new Engineer(data.name, data.employeeId, data.email, data.gitHub);
        
        // Send data to be written
        htmlAppend(newEngineer, newEngineer.getRole(), newEngineer.getGithub());
        // Show main manu
        menuOptions();
    });
}

// Intern function for collecting information about a intern. Creates new intern object and sends data to append function where it will be added to the HTML file
function intern(){
    inquirer
        .prompt(internQuestions)

    .then((data) => {
        // Intern constructor
        const newIntern = new Intern(data.name, data.employeeId, data.email, data.school);

        // Send data to be written
        htmlAppend(newIntern, newIntern.getRole(), newIntern.getSchool());
        // Show main manu
        menuOptions();
    });
}

// Write base HTML file including: header and manager
function write(employee, office){

    output =    
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Team Profiles</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    
    <div id="main">
        <h1>${employee.name}</h1>
        <h2>☕ Manager</h2>

        <div id="sub">
            <p>ID: ${employee.id}</p><br>
            <a>Email: </a><a href="mailto: ${employee.email}">${employee.email}</a><br>
            <p>Office Number: ${office}</p>
        </div>
    </div>`;

    // Create the HTML file
    fs.writeFile('dist/index.html', output, (err) =>
        err ? console.log(err) : console.log());
}

// Add additional employees to the HTML file
function htmlAppend(employee, title, wildCard){

    let output = "";

    // Build Engineer HTML code
    if(title == "Engineer"){
        output = 
`
    <div id="main">
        <h1>${employee.name}</h1>
        <h2>🤓 Engineer</h2>

        <div id="sub">
            <p>ID: ${employee.id}</p><br>
            <a>Email: </a><a href="mailto:${employee.email}">${employee.email}</a><br>
            <a>GitHub: </a><a href="https://www.github.com/${wildCard}">${wildCard}</a>
        </div>
    </div>
`;

    }
    // Build Intern HTML code
    else if(title == "Intern"){
        output = 
`
    <div id="main">
        <h1>${employee.name}</h1>
        <h2>🎓 Intern</h2>

        <div id="sub">
            <p>ID: ${employee.id}</p><br>
            <a>Email: </a><a href="mailto:${employee.email}">${employee.email}</a><br>
            <p>School: ${wildCard}</p>
        </div>
    </div>
`;
    }
    else{
        console.log("Role selection if/ else error");
    }

    // Add Engineer or Intern code to the end of the HTML doc
    fs.appendFile("dist/index.html", output, function (err) {
        if (err) throw err;
      });
}

// Function for ending the HTML doc and building the CSS file
function htmlFinisher(){

htmlOutput = 
`
</body>
</html>
`
    fs.appendFile("dist/index.html", htmlOutput, function (err) {
        if (err) throw err;
    });


cssOutput =
`
* {
    font-family: sans-serif;
}

h1{
    padding-top: 10px;
    padding-left: 15px;
    color: white;
}

h2{
    padding-left: 15px;
    color: white;
}

header{

    background: rgb(239, 79, 86);
    height: 75px;
    width: 100%;
    position:relative;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding-top: 25px;
}

#main{
    background: rgb(48, 125, 247);
    width: 250px;
    height: 300px;
    margin: 25px;
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

#sub{
    background:seashell;
    height: 50%;
    padding: 10px;
}
`      
    fs.writeFile('dist/styles.css', cssOutput, (err) =>
    err ? console.log(err) : console.log());
}

// Start the application by asking for information about the manager
manager();
