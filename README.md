Sure, here's a revised version:

---

**REST APIs for User Management**

REST APIs for:
- Registering User (First Name, Last Name, Email, Phone)
- Retrieving User by ID
- Updating User (First Name, Last Name, Email, Phone)
- Deleting/Disabling User
- Listing All Users with filters (Filters: First Name, Last Name, Email, Phone)

**Prerequisites**

- Node.js
- npm

**Installation**

```bash
git clone https://github.com/satishmca2015/usermanagement.git
cd usermanagement
npm install
```

**Database Migration Steps**

Step 1: Create a database named "usermanagement" on your local machine.

Step 2: Add your database credentials and details to the `/config/config.json` file.

Step 3: Run the following command to intsall sequelize packge globally :
```bash
npm install -g sequelize-cli
```

Step 4: Run the following command to create the database structure and migrate it to your local machine:

```bash
sequelize-cli db:migrate
```

**Running the Application**

```bash
nodemon server.js
# OR
node server.js
```

---


