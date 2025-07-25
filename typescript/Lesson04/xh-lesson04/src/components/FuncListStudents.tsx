import React from 'react'
import IStudent from './IStudent'

type FuncListStudentProps = {
    students: IStudent[];
}

export default function FuncListStudents({students} : FuncListStudentProps) {
  return (
    <div>
        <table className='table table-bordered table-striped'>
            <thead className='table-dark'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>State</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    students.map( (student, index) => {
                        return (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>{student.address}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.state}</td>
                                <td>
                                    <td>
                                        <button type='button' className='btn btn-primary'>View</button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-secondary'>Edit</button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger'>Delete</button>
                                    </td>
                                </td>
                            </tr>
                        )
                    } )
                }
            </tbody>
        </table>


    </div>
  )
}
