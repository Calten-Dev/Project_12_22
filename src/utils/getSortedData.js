export const getSortedData = (data, sortField) => {
  if (!sortField.fieldName) return data;

  const sorted = data.sort((a, b) => {
    const fieldOfA = a[sortField.fieldName];
    const fieldOfB = b[sortField.fieldName];

    if (typeof fieldOfA === "number" && typeof fieldOfB === "number") {
      return sortField.ascStatus ? fieldOfA - fieldOfB : fieldOfB - fieldOfA;
    }

    if (!isNaN(fieldOfA) && !isNaN(fieldOfB)) {
      return sortField.ascStatus
        ? parseFloat(fieldOfA) - parseFloat(fieldOfB)
        : parseFloat(fieldOfB) - parseFloat(fieldOfA);
    }
    // return fieldOfA < fieldOfB ? -1 : 1;
    return sortField.ascStatus ? (fieldOfA > fieldOfB ? -1 : 1) : fieldOfA < fieldOfB ? -1 : 1;
  });

  return sorted;
};
