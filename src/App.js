import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './component/StaffListComponent';
import './App.css';
import {STAFFS} from './shared/staffs'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lí nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>

        <div className="mt-3">
          <p>Bấm vào tên nhân viên để xem thông tin</p>
        </div>

        <StaffList staffs={this.state.staffs} />
        
        <Navbar dark className="mt-5"></Navbar>
      </div>
    );
  }
  
}

export default App;
