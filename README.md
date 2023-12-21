**REST APIs for User Management**

REST APIs for:
 - Register User (First Name, Last Name, Email, Phone)
 - Get User by ID
 - Update User (First Name, Last Name, Email, Phone)
 - Delete/Disable User
 - List All Users with filters (Filters: First Name, Last Name, Email, Phone)


**Prerequisites**

Node.js
 
npm 


**Installation**

git clone https://github.com/yourusername/your-repo-name.git

cd usermanagement

npm install


**Database Migration Steps**

Step 1: Create a database named "usermanagement" on your local machine.

Step 2: Add your database credentials and details to the `/config/config.json` file.

Step 3: Run the following command to create the database structure and migrate it to your local machine:

        sequelize-cli db:migrate


**Running the Application**

nodemon server.js

OR

node server.js


