INSERT INTO department (name)
VALUES ('Sales'),
       ('Finance'),
       ('Engineering'),
       ('Legal');

INSERT INTO roles (title, department, salary)
VALUES   ('Sales Lead', 1, 100000),
         ('Salesperson', 1, 80000),
         ('Lead Engineer', 3, 150000),
         ('Software Engineer', 3, 120000),
         ('Account Manager', 2, 160000),
         ('Accountant', 2, 125000),
         ('Legal Team Lead', 4, 250000),
         ('Lawyer', 4, 190000);


INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
  ('John', 'Doe', 1, NULL),  
  ('Jane', 'Smith', 2, 1),  
  ('Michael', 'Johnson', 3, NULL), 
  ('Sarah', 'Williams', 4, 3), 
  ('David', 'Brown', 5, NULL), 
  ('Emily', 'Jones', 6, 5),  
  ('Robert', 'Taylor', 7, NULL),
  ('Jennifer', 'Clark', 8, 7);