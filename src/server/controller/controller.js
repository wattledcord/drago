'use strict';
var Employee=require('./../models/model.js');
exports.create_a_employee=function(req,res){
    var new_employee=new Employee(req.body);
    Employee.createEmployee(new_employee,function(err,employee){
        if(err)
        res.send(err);
        res.json(employee);
    });
}