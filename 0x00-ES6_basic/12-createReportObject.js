function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (employee) => Object.keys(employee).length,
  };
}

export default createReportObject;
