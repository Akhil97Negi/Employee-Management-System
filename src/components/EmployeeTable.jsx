import React, { useState } from 'react';

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
  const [editRowId, setEditRowId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEditChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (id) => {
    onEdit(id, editValues);
    setEditRowId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          editRowId === employee.id ? (
            <tr key={employee.id}>
              <td><input name="first_name" defaultValue={employee.first_name} onChange={handleEditChange} /></td>
              <td><input name="last_name" defaultValue={employee.last_name} onChange={handleEditChange} /></td>
              <td><input name="email" defaultValue={employee.email} onChange={handleEditChange} /></td>
              <td>{employee.gender}</td>
              <td><input name="salary" defaultValue={employee.salary} onChange={handleEditChange} /></td>
              <td>
                <button onClick={() => handleEditSubmit(employee.id)}>Save</button>
                <button onClick={() => setEditRowId(null)}>Cancel</button>
              </td>
            </tr>
          ) : (
            <tr key={employee.id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => setEditRowId(employee.id)}>Edit</button>
                <button onClick={() => onDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
