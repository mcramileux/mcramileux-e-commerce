# McRamileux's E-Commerce
## 13th Challenge: Object-Relational Mapping (ORM) - E-Commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
- This is an E-commerce application that runs using the backend packages. The stater code has been modified, it just need to configure on working Express.JS API to use Sequelize to interact with a MySQL database.
  
- The user can do the following:
    - GET: to view all categories, products, and tags
    - PUT: to update a specific category, product, and tag
    - POST: to create a new category, product, and tag
    - DELETE: to delete a specific category, product, and tag

- All API testings will done using the Insomnia application. Please see the video below. 

## Table of Contents
- [McRamileux's E-Commerce](#mcramileuxs-e-commerce)
  - [13th Challenge: Object-Relational Mapping (ORM) - E-Commerce Back End](#13th-challenge-object-relational-mapping-orm---e-commerce-back-end)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage and Screenshots](#usage-and-screenshots)
  - [Links](#links)
  - [Contributions](#contributions)
  - [License](#license)
  - [Questions](#questions)
  - [Reference](#reference)
  - [Acknowledgements and Credits](#acknowledgements-and-credits)
  - [Author](#author)

## Technologies Used 
* Javascript
* Node.js
* MySQL
* Insomnia
* Screencastify

## Installation
- Navigate to this [repository](https://github.com/mcramileux/mcramileux-e-commerce).
- Open your terminal on your local machine and clone the repository.
- The following are the installation needed to start the company's database to work before anything else:
  - npm i: install the dependencies packages
  - .env: fill up the following information needed for security purposes:
      - DB_NAME='ecommerce_db'
      - DB_PASSWORD='your password'
      - DB_USER='your MYSQL username'

## Usage and Screenshots
- In VS Code terminal, install all the npm package dependencies by typing 'npm i'. Make sure to open the right folder which is the main one: 'mcramileux-e-commerce'.

- Open another terminal, to check the database use by typing in 'mysql -u root -p', followed by your  password and finally, 'source schema.sql;' to create and reload the database.
 -  ![schema](https://github.com/mcramileux/mcramileux-e-commerce/assets/122607160/d14af8cb-5ad2-4b24-8905-59aae3863e8b)

- Next is to populate the database by typing in, 'npm run seed'. This creates the tables and seed from the database.
  
- Finally, run 'npm start'. This command starts the server and every time the user add or delete codes, always run this to update the application.
-  ![npm-start](https://github.com/mcramileux/mcramileux-e-commerce/assets/122607160/a8c70d18-a910-41c3-94ca-d026efcfb2e9)



- For more information or guidelines on how to do the database, please watch the video [here]().

## Links
- Github Repository: https://github.com/mcramileux/mcramileux-e-commerce
- Google Drive Video: 

## Contributions
* Contributions to this project won't be accepted as this is the reflection of the author's work hence the following questions and answers. Furthermore, forking or creating a pull request is acceptable.

## License
This project is under [MIT](https://choosealicense.com/licenses/mit/) license.

## Questions
* For more questions or inquiries, please contact the author at [GitHub](https://github.com/mcramileux) or email kristineramilo21@gmail.com.

## Reference
- [Node.js](https://nodejs.org/en) 
- [MySQL](https://www.mysql.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Acknowledgements and Credits
- Jacob Carver - weekly boot camp tutor
- AskBCS Learning Assistants
  
## Author
- © 2023 mcramileux
