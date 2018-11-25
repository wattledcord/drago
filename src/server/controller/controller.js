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
exports.get_all_employees=function(req,res){
    Employee.getAllEmployees(function(err,allemployees){
        if(err)
        res.send(err)
        res.json(allemployees)
    })
}
exports.update_a_employee=function(req,res){
    var new_employee=new Employee(req.body);
    var id =req.params.id;
    Employee.updateEmployee(new_employee,id,function(err,result){
        if(err)
        res.send(err)
        res.json(result)
    });
}
exports.delete_a_employee=function(req,res){
    var id =req.params.id;
    Employee.deleteEmployee(id,function(err,result){
        if(err)
        res.send(err)
        res.json(result)
    })   
}
exports.get_a_employee=function(req,res){
    var id =req.params.id;
    Employee.getaEmployee(id,function(err,result){
        if(err)
        res.send(err)
        res.json(result)
    })
}
