import React from 'react'
import IEmployee from './IEmployee'

interface EmployeeProperties {
    employee: IEmployee
}

export default function Employee({employee}: EmployeeProperties) {
  return (
        <tr>
            <td>{employee.empID}</td>
            <td>{employee.empName}</td>
            <td>{employee.empSalary}</td>
            <td>{employee.empStatus}</td>
            <td>
              <button>View</button>
              <button>Update</button>
              <button>Remove</button>
            </td>
        </tr>
  )
}
