const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Function to generate Profile URL
function generateProfileUrl(username) {
  let result = 'https://github.com/' + username;
  return result;
}

//Endpoint 1: Given username generate a GitHub profile URL for the user
app.get('/github-profile', (req, res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
});

//Function to generate Certificate
function generateCertificate(firstName, lastName, courseName) {
  let result =
    'This certification is awarded to ' +
    firstName +
    ' ' +
    lastName +
    ' for completing the course ' +
    courseName;
  return result;
}

//Endpoint 2: Generate certificate
app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

//Function to calculate grade
function calculateGrade(maths, science, english) {
  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  return 'Your grade in percentage is ' + gradeInPercentage + '%';
}

//Endpoint 3: Create an endpoint that takes maths, science & english as query parameters and returns grade in percentage
app.get('/grade', (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);

  res.send(calculateGrade(maths, science, english));
});

//Function to split bill amount
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends;
  return 'Result: Each friend owes Rs. ' + splitAmount + ' against the bill';
}

//Endpoint 4: Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result
app.get('/split-bill', (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);

  res.send(splitBill(billAmount, numberOfFriends));
});

//Function to calculate salary
function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = hourlyWage * totalHours;
  return 'Result: Your monthly salary is ₹' + monthlySalary;
}

//Endpoint 5:Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.
app.get('/monthly-salary', (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
