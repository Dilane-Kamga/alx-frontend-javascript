function createIteratorObject(report) {
  const allReport = { ...report.allEmployees };
  const allEmployees = [];
  for (const item of Object.values(allReport)) {
    allEmployees.push(...item);
  }

  return allEmployees;
}

export default createIteratorObject;
