import React, { ChangeEvent, Component, FormEvent } from 'react'
import IStudent from './IStudent';

interface IProps {
  onSubmit: (student: IStudent) => void;
}

export default class EventForm extends Component<IProps, IStudent> {
  handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = ev.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  }
  render() {
    return (
      <div>
        Form
        <form onSubmit={this.handleSubmit}>
          <p>
            Tên
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </p>
        </form>
      </div>
    )
  }
}
