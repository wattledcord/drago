'user strict';
const sql=require('./../config/db.js');

var Employee=function(employee){
    this.EmployeeName=employee.EmployeeName;
  this.FirstName=employee.FirstName;
  this.LastName=employee.LastName;
  this.PhoneNumber=employee.PhoneNumber;
  this.Address=employee.Address;
  this.Company=employee.Company;
  this.Designation=employee.Designation;
  this.HighestEducation=employee.HighestEducation;
};
Employee.createEmployee=function createEmployee(newemployee,result){
    sql.query('call createemployee(?,?,?,?,?,?,?,?);',[newemployee.EmployeeName,newemployee.FirstName,newemployee.LastName,newemployee.PhoneNumber,
    newemployee.Address,newemployee.Company,newemployee.Designation,newemployee.HighestEducation],
    function(err,res){
        if(err){
            console.log("error:",err);
            result(err,null);
        }else{
            console.log(res);
            result(null,res);
        }
    });
};
module.exports=Employee;