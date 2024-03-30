const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'March2002!',
  database: 'busniess_db',
});

inquirer.prompt([
  {
    type: 'list',
    name: 'list of options',
    message: 'What do you want to do?',
    choices: [
      'View all employees',
      'Add employee',
      'View all roles',
      'Add role',
      'View all departments',
      'Add department',
    ],
  },
])
.then((answers) => {
  switch (answers.action) {
    case 'View all employees':
      connection.query('SELECT * FROM employee', (err, rows) => {
        if (err) throw err;
        console.log('All employees:', rows);
        connection.end(); 
      });
      break;
    case 'Add employee':
      console.log('Adding employee...');
      connection.end(); 
      break;
    case 'View all roles':
      connection.query('SELECT * FROM roles', (err, rows) => {
        if (err) throw err;
        console.log('All roles:', rows);
        connection.end(); 
      });
      break;
    case 'Add role':
      console.log('Adding role...');
      connection.end();
      break;
    case 'View all departments':
      connection.query('SELECT * FROM departments', (err, rows) => {
        if (err) throw err;
        console.log('All departments:', rows);
        connection.end();
      });
      break;
    case 'Add department':
      console.log('Adding department...');
      connection.end();
      break;
    default:
      console.log('Invalid action.');
      connection.end(); 
      break;
  }
})
.catch((err) => {
  console.error('Error:', err);
});
