import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import dateFormat from "dateformat";

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            selectStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectStaff: staff });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div className="col-12 mt-5">
                    <Card>
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                        <CardBody>
                            <CardTitle>Họ và tên: {staff.name}</CardTitle>
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
                <div className="col-md-6 col-lg-4 mt-5">
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card> 
                </div>
                 
            )
        })

        return (
            <div className="container">
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