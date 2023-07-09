const employee = {};
employee.name = "John";
employee.streetAddress = "1st St.";

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  const updateEmployee = { ...employee };
  updateEmployee[key] = value;
  return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(
  employeeObject,
  key,
  value
) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employeeObject, key, value) {
  const updateEmployee = { ...employee };
  updateEmployee[key] = value;
  return updateEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key, value) {
  delete employee[key];
  return employee;
}
