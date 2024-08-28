import React, { useState, useMemo } from 'react';
import { employees as employeeData } from './data';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import useSearch from './hooks/useSearch';

const App = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredEmployees = useMemo(() => {
    return employees.filter(employee => genderFilter === 'All' || employee.gender === genderFilter);
  }, [employees, genderFilter]);

  const sortedEmployees = useMemo(() => {
    return filteredEmployees.sort((a, b) => sortOrder === 'asc' ? a.salary - b.salary : b.salary - a.salary);
  }, [filteredEmployees, sortOrder]);

  const searchedEmployees = useSearch(sortedEmployees, searchTerm);

  const handleDelete = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const handleEdit = (id, updatedEmployee) => {
    setEmployees(prev => prev.map(emp => (emp.id === id ? updatedEmployee : emp)));
  };

  return (
    <div className="app">
      <h1>Employee Management System</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterOptions setGenderFilter={setGenderFilter} />
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort by Salary ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <EmployeeTable employees={searchedEmployees} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
