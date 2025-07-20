import React, { Component } from 'react'

interface ClassMemberState {
    name: string,
    age: number;
}

export default class ClassMember extends Component<{}, ClassMemberState> {
    // State
    constructor (props: {}) {
        super(props)
        this.state = {
            name: 'Tran Hai',
            age: 22
        }
    }

    handleChange = () => {
        this.setState(
            {
                name: 'New Name',
                age: 2000
            }
        )
    }

    render() {
    return (
      <div className='alert alert-success'>ClassMember
        <h2>Đọc dữ liệu trong state</h2>
        <hr />
        <p> Xin chào {this.state.name} </p>
        <p> Tuổi {this.state.age} </p>
        
        <button onClick={this.handleChange}>Update</button>
      </div>
    )
  }
}
