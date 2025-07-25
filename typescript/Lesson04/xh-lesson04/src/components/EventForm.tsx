import React, { ChangeEvent, Component, FormEvent } from 'react';
import IStudent from './IStudent';

interface IProps {
  onSubmit: (student: IStudent) => void;
  students: IStudent[];
}

const initialState: Omit<IStudent, 'id'> = {
  name: '',
  age: 0,
  gender: '',
  address: '',
  email: '',
  phone: '',
  state: '',
};

export default class EventForm extends Component<IProps, Omit<IStudent, 'id'>> {
  constructor(props: IProps) {
    super(props);
    this.state = initialState;
  }

  handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // Tìm id lớn nhất hiện tại
    const maxId = this.props.students.length > 0 ? Math.max(...this.props.students.map(s => s.id)) : 0;
    const newStudent: IStudent = {
      id: maxId + 1,
      ...this.state,
    };
    this.props.onSubmit(newStudent);
    this.setState(initialState);
  };

  render() {
    return (
      <div>
        <h3>Nhập thông tin học sinh</h3>
        <form onSubmit={this.handleSubmit}>

            <label>Tên</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" required />

            <label>Tuổi</label>
            <input type="number" name="age" value={this.state.age} onChange={this.handleChange} className="form-control" required />

            <label>Giới tính</label>
            <select name="gender" value={this.state.gender} onChange={this.handleChange} className="form-control" required>
              <option value="">--Chọn--</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>

            <label>Địa chỉ</label>
            <input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="form-control" required />

            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" required />

            <label>Số điện thoại</label>
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control" required />

            <label>Trạng thái</label>
            <select name="state" value={this.state.state} onChange={this.handleChange} className="form-control" required>
              <option value="">--Chọn--</option>
              <option value="Available">Available</option>
              <option value="Left">Left</option>
            </select>

          <button type="submit" className="btn btn-success">Thêm học sinh</button>
        </form>
      </div>
    );
  }
}
