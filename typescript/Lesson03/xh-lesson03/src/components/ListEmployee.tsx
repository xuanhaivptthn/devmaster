import React from 'react'
import IEmployee from './IEmployee'
import Employee from './Employee'

interface ListEmployeesProps {
    employees: IEmployee[]
}

export default function ListEmployee({employees}: ListEmployeesProps) {
    const elementEmployee = employees.map((employee, index) => {
        return <Employee employee={employee} key={index} />
    })
  
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {elementEmployee}
            </tbody>
        </table>
  )
}
