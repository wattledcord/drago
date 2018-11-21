'use strict';
module.exports = function(app) {
  var employee = require('./../controller/controller.js');

  // todoList Routes
  app.route('/tasks')
    .post(employee.create_a_employee);
}