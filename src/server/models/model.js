'user strict';
const sql = require('./../config/db.js');
const dbdetails=require('./../config/config');

var Employee = function (employee) {
    this.EmployeeName = employee.EmployeeName;
    this.FirstName = employee.FirstName;
    this.LastName = employee.LastName;
    this.PhoneNumber = employee.PhoneNumber;
    this.Address = employee.Address;
    this.Company = employee.Company;
    this.Designation = employee.Designation;
    this.HighestEducation = employee.HighestEducation;
};
Employee.createEmployee = function createEmployee(newemployee, result) {
    sql.query('call createemployee(?,?,?,?,?,?,?,?);', [newemployee.EmployeeName, newemployee.FirstName, newemployee.LastName, newemployee.PhoneNumber,
    newemployee.Address, newemployee.Company, newemployee.Designation, newemployee.HighestEducation],
        function (err, res) {
            if (err) {
                console.log("error:", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        });
};
Employee.getAllEmployees=function getAllEmployees(result){
    sql.query(`select * from ${dbdetails.db.database}.employee`,function(err,res){
        if(err) result(err,null)
        else result(null,res)
    });
};
Employee.updateEmployee=function updateEmployee(newemployee,id,result){
    var query='UPDATE employee SET ';
    if(newemployee.EmployeeName)query+=`EmployeeName='${newemployee.EmployeeName}',`;
    if(newemployee.FirstName)query+=`FirstName='${newemployee.FirstName}',`;
    if(newemployee.LastName)query+=`LastName='${newemployee.LastName}',`;
    if(newemployee.PhoneNumber)query+=`PhoneNumber='${newemployee.PhoneNumber}',`;
    if(newemployee.Address)query+=`Address='${newemployee.Address}',`;
    if(newemployee.Company)query+=`Company='${newemployee.Company}',`;
    if(newemployee.Designation)query+=`Designation='${newemployee.Designation}',`;
    if(newemployee.HighestEducation)query+=`HighestEducation='${newemployee.HighestEducation}',`;
   var querysent=query.substring(0,query.length-1);

 querysent+=` WHERE idemployee=${id}`;
    sql.query(querysent,function(err,res){
        if(err) result(err,null)
        else result(null,res)
    })

}
Employee.deleteEmployee=function deleteEmployee(id,result)  {
    sql.query(`delete from ${dbdetails.db.database}.employee where idemployee=${id}`,function(err,res){
        if(err) result(err,null)
        else result(null,res)
    })
    
}
Employee.getaEmployee=function getaEmployee(id,result)  {
    sql.query(`select * from ${dbdetails.db.database}.employee where idemployee=${id}`,function(err,res){
        if(err) result(err,null)
        else result(null,res)
    })
    
}
module.exports = Employee;