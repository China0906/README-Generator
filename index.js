// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'repository',
    message: 'What is the applicaton Repository?',
}, {
    type: 'input',
    name: 'title',
    message: 'What is the Project Title?',
},
{
    type: 'input',
    name: 'description',
    message: 'What is the desrciption of your Project?',
}, {
    type: 'input',
    name: 'instructions',
    message: 'What are the installation instructions?',
}, {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
}, {
    type: 'input',
    name: 'guidelines',
    message: 'Do you have any contribution guidelines?',
}, {
    type: 'input',
    name: 'test',
    message: 'Do you have any test instructions?',
}, {
    type: 'list',
    name: 'license',
    message: 'Which license to use?',
    choices: ['Apache', 'BSD', 'Boost']
},
{
    type: 'input',
    name: 'GitHub_Username',
    message: 'Do you have a GitHub username?',
}, {
    type: 'input',
    name: 'email',
    message: 'Do you have an email address?',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
