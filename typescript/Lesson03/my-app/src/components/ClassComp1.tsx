import React, { Component } from 'react'

interface ClassComp1Props {
    uName: string,
    uAge: number;
}

export default class ClassComp1 extends Component<ClassComp1Props> {
  render() {
    return (
      <div className='alert alert-success'>
        <h2> Thông tin:</h2>
        <br /> Name: {this.props.uName}
        <br /> Age: {this.props.uAge}
      </div>
    )
  }
}
