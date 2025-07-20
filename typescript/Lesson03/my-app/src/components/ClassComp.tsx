import React, { Component } from 'react'

interface ClassCompProps {
    studentName: string;
}

export default class ClassComp extends Component<ClassCompProps> {  
    render() {
    return (
      <div className='alert alert-danger'>
        ClassComp
        <h2> Lấy dữ liệu trong props</h2>
        <p>Student name: {this.props.studentName}</p>
        </div>
    )
  }
}
