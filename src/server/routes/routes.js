'use strict';
module.exports = function(app) {
  var employee = require('./../controller/controller.js');
  // todoList Routes
  app.route('/employees/')
    .post(employee.create_a_employee).get(employee.get_all_employees);
    app.route('/employee/:id').get(employee.get_a_employee).put(employee.update_a_employee).delete(employee.delete_a_employee);
}