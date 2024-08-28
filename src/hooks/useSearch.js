import { useMemo } from 'react';

const useSearch = (employees, searchTerm) => {
  return useMemo(() => {
    if (!searchTerm) return employees;
    const lowerCaseTerm = searchTerm.toLowerCase();
    return employees.filter(employee =>
      `${employee.first_name} ${employee.last_name}`.toLowerCase().includes(lowerCaseTerm)
    );
  }, [employees, searchTerm]);
};

export default useSearch;
