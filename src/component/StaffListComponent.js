import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import dateFormat from "dateformat";

class StaffList extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            selectStaff: null,
            colDefault: "col-md-6 col-lg-4 mt-5"
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectStaff: staff });
    }

    onColSelect(col) {
        this.setState({colDefault: col})
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div className="col-12 mt-5">
                    <Card>
                        <CardBody>
                            <CardTitle><b>Họ và tên: {staff.name}</b></CardTitle>
                            <CardText>
                                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const stafflist = this.props.staffs.map((staff) => {
            return (
                <div className={this.state.colDefault}>
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle><b>{staff.name}</b></CardTitle>
                        </CardBody>
                    </Card> 
                </div>
                 
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <button
                        className='btn btn-success mr-2'
                        onClick={() => this.onColSelect('col-md-2 mt-5')}
                    >
                        6 cột
                    </button>
                    <button
                        className='btn btn-success mr-2'
                        onClick={() => this.onColSelect('col-sm-3 mt-5')}
                    >
                        4 cột
                    </button>
                    <button
                        className='btn btn-success'
                        onClick={() => this.onColSelect('col-sm-6 mt-5')}
                    >
                        2 cột
                    </button>
                </div>
                <div className="row">
                    {stafflist}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectStaff)}
                </div>
            </div>
        );
    }
}

export default StaffList;