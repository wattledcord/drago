# Drago

This is Simple Website to illustrate REST API Server and a simple Website to display data from MySQL Database

## Prerequisites

Mysql Database need to be installed and make sure to set authentication method to legacy to avoid **Client does not support authentication protocol requested by server; consider upgrading MySQL client nodejs** error if already installed run below command to change authentication of user.

```sql
ALTER USER '<mysqluser>'@'%' IDENTIFIED WITH mysql_native_password BY '<password>'
```

after Mysql setup run queries from sqlqueries file to setup tables and stored procedures required for application.

To change db config details update **db.js** file.

## Setup

```cmd
npm install
npm run build
npm start
```

## Testing

Install postman for testing apis and enter below url and set http method to **POST**

```cmd
localhost:3000/tasks
```

and body set to **raw** and **JSON(application/json)** and enter body like below

```json
{
  "EmployeeName":"<Employee Name || UserName>",
  "FirstName":"< EmployeeFirst Name>",
  "LastName":"<Employee Last Name>",
  "PhoneNumber":"<Employee Phone Number>",
  "Address":"<Employee Address>",
  "Company":"<Employee Company>",
  "Designation":"<Employee Designation>",
  "HighestEducation":"<Employee highestEducation>"
}
```

you should get response like

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}
```

## Jest Testing

run below command for webserver and react testing

```cmd
npm run test
```

### Testing frame works used

* Jest - for Webserver and to run tests
* enzyme - for **ReactJS** testing

if there are any errors specify them in issues